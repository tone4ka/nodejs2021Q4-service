import Fastify, { FastifyInstance } from 'fastify';
import jwt from 'jsonwebtoken';
import config from './common/config';
import userRouter from './resources/users/user.router';
import taskRouter from './resources/tasks/task.router';
import boardRouter from './resources/boards/board.router';
import loginRouter from './resources/login/login.router';
import Logger from './logging/logger';
import errorHandler from './errorHandling/errorHandler';
import MyError from './errorHandling/myError';

const { JWT_SECRET_KEY } = config;

const logger = new Logger();

const server: FastifyInstance = Fastify({});

server.addHook('preHandler', async (req) => {
  const url: string = req.url;
  if (url !== '/' && url !== '/doc' && url !== '/login') {
    const authorizationHeader = req.headers.authorization;
    if(!authorizationHeader) throw new MyError('token not found', 401);

    const authMethod = authorizationHeader.split(' ')[0];
    if(authMethod !== 'Bearer') throw new MyError('invalid auth method', 401);

    const token = authorizationHeader.split(' ')[1];
    if(!token) throw new MyError('empty token', 401);

    const secretKey: string = JWT_SECRET_KEY ? JWT_SECRET_KEY : 'secret-key';
    try {
      jwt.verify(token, secretKey);
    } catch (e) {
      throw new MyError('invalid token', 401);
    }
  }
});

server.addHook('onSend', async (req, reply) => {
  logger.print(req, reply);
});

server.get('/', async (_, reply) => {
  reply.code(201).send({ hello: 'world' });
})
server.get('/doc', async (_, reply) => {
  reply.code(201).send({ hello: 'world' });
})
server.register(loginRouter, { prefix: '/login' });
server.register(userRouter, { prefix: '/users' });
server.register(taskRouter, { prefix: 'boards/:boardId/tasks' });
server.register(boardRouter, { prefix: '/boards' });

server.setNotFoundHandler({}, () => {
  throw new MyError('URL not found', 404);
});

server.setErrorHandler((error, request, reply) =>
  errorHandler(error, request, reply)
);

process
  .on('unhandledRejection', (err: Error) => {
    logger.printProcessError(err.message);
  })
  .on('uncaughtException', (err: Error) => {
    logger.printProcessError(err.message);
    process.exit(1);
  });

export default server;
