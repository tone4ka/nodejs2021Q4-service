const fastify = require('fastify')({ logger: true });
import * as userRouter from './resources/users/user.router';
import * as taskRouter from './resources/tasks/task.router';
import * as boardRouter from './resources/boards/board.router';

fastify.register(userRouter, { prefix: '/users' });
fastify.register(taskRouter, { prefix: 'boards/:boardId/tasks' });
fastify.register(boardRouter, { prefix: '/boards' });

export default fastify;
