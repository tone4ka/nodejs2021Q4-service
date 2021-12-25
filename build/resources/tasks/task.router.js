"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_model_1 = __importDefault(require("./task.model"));
const tasksService = __importStar(require("./task.service"));
const boardsService = __importStar(require("../boards/board.service"));
const myError_1 = __importDefault(require("../../errorHandling/myError"));
/**
 * Routing with prefix 'boards/:boardId/tasks'
 * @param fastify FastifyInstance
 */
const taskRouter = async (fastify) => {
    fastify.get('/', async (request, reply) => {
        const { boardId } = request.params;
        const board = await boardsService.get(boardId);
        if (!board) {
            throw new myError_1.default('No board with this ID found', 404);
        }
        const tasks = tasksService.getAll(boardId);
        reply.send(tasks);
    });
    fastify.post('/', async (request, reply) => {
        const { boardId } = request.params;
        const board = await boardsService.get(boardId);
        if (!board) {
            throw new myError_1.default('No board with this ID found', 404);
        }
        const data = request.body;
        data.boardId = boardId;
        const task = tasksService.save(data);
        reply.code(201).send(task_model_1.default.toResponse(task));
    });
    fastify.get('/:id', async (request, reply) => {
        const { boardId } = request.params;
        const board = await boardsService.get(boardId);
        if (!board) {
            throw new myError_1.default('No board with this ID found', 404);
        }
        const { id } = request.params;
        const task = tasksService.get(id);
        if (!task) {
            throw new myError_1.default('No task with this ID found', 404);
        }
        else {
            reply.send(task_model_1.default.toResponse(task));
        }
    });
    fastify.delete('/:id', async (request, reply) => {
        const { boardId } = request.params;
        const board = await boardsService.get(boardId);
        if (!board) {
            throw new myError_1.default('No board with this ID found', 404);
        }
        const { id } = request.params;
        const task = tasksService.get(id);
        if (!task) {
            throw new myError_1.default('No task with this ID found', 404);
        }
        tasksService.remove(id);
        reply.code(200).send({ Success: 'task deleted' });
    });
    fastify.put('/:id', async (request, reply) => {
        const { boardId } = request.params;
        const board = await boardsService.get(boardId);
        if (!board) {
            throw new myError_1.default('No board with this ID found', 404);
        }
        const { id } = request.params;
        const task = tasksService.get(id);
        if (!task) {
            throw new myError_1.default('No task with this ID found', 404);
        }
        const apdatedTask = tasksService.update(id, request.body);
        if (apdatedTask) {
            reply.send({ ...task_model_1.default.toResponse(apdatedTask) });
        }
    });
};
exports.default = taskRouter;
