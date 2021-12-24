import Fastify, { FastifyInstance } from 'fastify';
import userRouter from './resources/users/user.router';
import taskRouter from './resources/tasks/task.router';
import boardRouter from './resources/boards/board.router';
import Logger from './logging/logger';
import {errorHandler} from './errorHandlers/errorHandler';
const loogger = new Logger();

const server: FastifyInstance = Fastify({});

server.addHook('onSend', async (req, reply) => {
    loogger.print(req, reply.statusCode);
});

server.setErrorHandler((error, request, reply) => errorHandler (error, request, reply))

server.register(userRouter, { prefix: '/users' });
server.register(taskRouter, { prefix: 'boards/:boardId/tasks' });
server.register(boardRouter, { prefix: '/boards' });

export default server;
