import Fastify, { FastifyInstance } from 'fastify';
import userRouter from './resources/users/user.router';
import taskRouter from './resources/tasks/task.router';
import boardRouter from './resources/boards/board.router';
import loginRouter from './resources/login/login.router';
import Logger from './logging/logger';
import errorHandler from './errorHandling/errorHandler';
import MyError from './errorHandling/myError';

const logger = new Logger();

const server: FastifyInstance = Fastify({});

server.addHook('onSend', async (req, reply) => {
  const url: string = req.url;
  if (url !== '/' && url !== '/doc' && url !== '/login') {
  // Добавить проверку роута и токена????????????????????????????????????????????????????
  // const areSame = await bcrypt.compare(password, candidate.password);
    console.log('!!!!!!!!!!!!!!!!!!!!');
    console.log('here is token check');
  }
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
