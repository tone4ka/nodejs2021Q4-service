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
const taskRouter = async (fastify) => {
    fastify.get('/', async (request, reply) => {
        const { boardId } = request.params;
        const tasks = tasksService.getAll(boardId);
        reply.send(tasks);
    });
    fastify.post('/', async (request, reply) => {
        const data = request.body;
        const { boardId } = request.params;
        data.boardId = boardId;
        const task = tasksService.save(data);
        reply.code(201).send(task_model_1.default.toResponse(task));
    });
    fastify.get('/:id', async (request, reply) => {
        const { id } = request.params;
        const task = tasksService.get(id);
        if (!task) {
            reply.code(404);
            reply.send('not found');
        }
        else {
            reply.send(task_model_1.default.toResponse(task));
        }
    });
    fastify.delete('/:id', async (request, reply) => {
        const { id } = request.params;
        tasksService.remove(id);
        reply.code(200).send({ Success: 'task deleted' });
    });
    fastify.put('/:id', async (request, reply) => {
        const { id } = request.params;
        const task = tasksService.update(id, request.body);
        if (task) {
            reply.send({ ...task_model_1.default.toResponse(task) });
        }
        else {
            reply.send('not found');
        }
    });
};
exports.default = taskRouter;
