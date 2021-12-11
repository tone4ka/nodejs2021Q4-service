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
const board_model_1 = __importDefault(require("./board.model"));
const boardsService = __importStar(require("./board.service"));
const tasksService = __importStar(require("../tasks/task.service"));
const boardRouter = async (fastify) => {
    fastify.get('/', (_, reply) => {
        const boards = boardsService.getAll();
        const boardsDataToSend = boards.map((board) => board_model_1.default.toResponse(board));
        reply.send(boardsDataToSend);
    });
    fastify.post('/', async (request, reply) => {
        const board = await boardsService.save(request.body);
        reply.code(201).send(board_model_1.default.toResponse(board));
    });
    fastify.get('/:id', async (request, reply) => {
        const { id } = request.params;
        const board = await boardsService.get(id);
        if (!board) {
            reply.code(404);
        }
        reply.send(board_model_1.default.toResponse(board));
    });
    fastify.delete('/:id', async (request, reply) => {
        const { id } = request.params;
        const tasks = tasksService.getAll(id);
        let i = 0;
        while (i < tasks.length) {
            const task = tasks[i];
            tasksService.remove(task.id);
            i += 1;
        }
        await boardsService.remove(id);
        reply.code(200).send({ Success: 'board deleted' });
    });
    fastify.put('/:id', async (request, reply) => {
        const { id } = request.params;
        const board = await boardsService.update(id, request.body);
        reply.send({ ...board_model_1.default.toResponse(board) });
    });
};
exports.default = boardRouter;
