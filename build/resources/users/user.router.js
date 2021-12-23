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
const logger_1 = __importDefault(require("../../logging/logger"));
const loogger = new logger_1.default();
/**
 * Routing with prefix '/users'
 * @param fastify FastifyInstance
 */
const userRouter = async (fastify) => {
    fastify.get('/', (request, reply) => {
        const users = usersService.getAll();
        const usersDataToSend = users.map((user) => user_model_1.default.toResponse(user));
        loogger.print(request, reply.statusCode);
        reply.send(usersDataToSend);
    });
    fastify.post('/', (request, reply) => {
        const user = usersService.save(request.body);
        loogger.print(request, 201);
        reply.code(201).send(user_model_1.default.toResponse(user));
    });
    fastify.get('/:id', (request, reply) => {
        const { id } = request.params;
        const user = usersService.get(id);
        if (!user) {
            loogger.print(request, 404);
            reply.code(404);
        }
        loogger.print(request, reply.statusCode);
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
        loogger.print(request, 200);
        reply.code(200).send({ Success: 'user deleted' });
    });
    fastify.put('/:id', (request, reply) => {
        const { id } = request.params;
        const user = usersService.update(id, request.body);
        loogger.print(request, reply.statusCode);
        reply.send({ ...user_model_1.default.toResponse(user) });
    });
};
exports.default = userRouter;
