const fastify = require('fastify')({ logger: true });
const userRouter = require('./resources/users/user.router');
const taskRouter = require('./resources/tasks/task.router');
const boardRouter = require('./resources/boards/board.router');

fastify.register(userRouter, { prefix: '/users' });
fastify.register(taskRouter, { prefix: 'boards/:boardId/tasks' });
fastify.register(boardRouter, { prefix: '/boards' });

export default fastify;
