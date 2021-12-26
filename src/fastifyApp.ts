import Fastify, { FastifyInstance } from 'fastify';
import userRouter from './resources/users/user.router';
import taskRouter from './resources/tasks/task.router';
import boardRouter from './resources/boards/board.router';
import Logger from './logging/logger';
import errorHandler from './errorHandling/errorHandler';
import MyError from './errorHandling/myError';

const logger = new Logger();

const server: FastifyInstance = Fastify({});

server.addHook('onSend', async (req, reply) => {
  logger.print(req, reply);
});

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
