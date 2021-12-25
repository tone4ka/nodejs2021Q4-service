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
  logger.print(req, reply.statusCode);
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
  .on('unhandledRejection', () => {
    logger.printProcessError('Unhandled Rejection at Promise');
    console.error('Unhandled Rejection at Promise');
  })
  .on('uncaughtException', () => {
    logger.printProcessError('Uncaught Exception thrown');
    console.error('Uncaught Exception thrown');
    process.exit(1);
  });

export default server;
