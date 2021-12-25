"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const user_router_1 = __importDefault(require("./resources/users/user.router"));
const task_router_1 = __importDefault(require("./resources/tasks/task.router"));
const board_router_1 = __importDefault(require("./resources/boards/board.router"));
const logger_1 = __importDefault(require("./logging/logger"));
const errorHandler_1 = __importDefault(require("./errorHandling/errorHandler"));
const myError_1 = __importDefault(require("./errorHandling/myError"));
const logger = new logger_1.default();
const server = (0, fastify_1.default)({});
server.addHook('onSend', async (req, reply) => {
    logger.print(req, reply.statusCode);
});
server.register(user_router_1.default, { prefix: '/users' });
server.register(task_router_1.default, { prefix: 'boards/:boardId/tasks' });
server.register(board_router_1.default, { prefix: '/boards' });
server.setNotFoundHandler({}, () => {
    throw new myError_1.default('URL not found', 404);
});
server.setErrorHandler((error, request, reply) => (0, errorHandler_1.default)(error, request, reply));
process
    .on('unhandledRejection', (err) => {
    logger.printProcessError('Unhandled Rejection at Promise');
    console.error(err.message, 'Unhandled Rejection at Promise');
})
    .on('uncaughtException', (err) => {
    logger.printProcessError('Uncaught Exception thrown');
    console.error(err.message, 'Uncaught Exception thrown');
    process.exit(1);
});
exports.default = server;
