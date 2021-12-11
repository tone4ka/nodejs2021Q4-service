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
const user_model_1 = __importDefault(require("./user.model"));
const usersService = __importStar(require("./user.service"));
const tasksService = __importStar(require("../tasks/task.service"));
const userRouter = async (fastify) => {
    fastify.get('/', (_, reply) => {
        const users = usersService.getAll();
        const usersDataToSend = users.map((user) => user_model_1.default.toResponse(user));
        reply.send(usersDataToSend);
    });
    fastify.post('/', (request, reply) => {
        const user = usersService.save(request.body);
        reply.code(201).send(user_model_1.default.toResponse(user));
    });
    fastify.get('/:id', (request, reply) => {
        const { id } = request.params;
        const user = usersService.get(id);
        if (!user) {
            reply.code(404);
        }
        reply.send(user_model_1.default.toResponse(user));
    });
    fastify.delete('/:id', (request, reply) => {
        const { id } = request.params;
        const tasks = tasksService.getAllusersTasks(id);
        for (let i = 0; i < tasks.length; i += 1) {
            const task = tasks[i];
            task.userId = null;
            tasksService.update(task.id, task);
        }
        usersService.remove(id);
        reply.code(200).send({ Success: 'user deleted' });
    });
    fastify.put('/:id', (request, reply) => {
        const { id } = request.params;
        const user = usersService.update(id, request.body);
        reply.send({ ...user_model_1.default.toResponse(user) });
    });
};
exports.default = userRouter;
