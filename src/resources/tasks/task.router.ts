import {FastifyPluginAsync} from 'fastify';
import Task from './task.model';
import * as tasksService from './task.service';
import * as boardsService from '../boards/board.service';
import MyError from '../../errorHandling/myError';

interface Params {
  id: string;
  boardId: string;
}

/**
 * Routing with prefix 'boards/:boardId/tasks'
 * @param fastify FastifyInstance
 */
const taskRouter: FastifyPluginAsync = async (fastify) => {
  fastify.get('/', async (request, reply) => {
    const { boardId } = request.params as Params;
    const board = await boardsService.get(boardId);
    if (!board) {
      throw new MyError('No board with this ID found', 404);
    }
    const tasks = tasksService.getAll(boardId);
    reply.send(tasks);
  });
  fastify.post('/', async (request, reply) => {
    const { boardId } = request.params as Params;
    const board = await boardsService.get(boardId);
    if (!board) {
      throw new MyError('No board with this ID found', 404);
    }
    const data = request.body as Task;
    data.boardId = boardId;
    const task = tasksService.save(data);
    reply.code(201).send(Task.toResponse(task));
  });
  fastify.get('/:id', async (request, reply) => {
    const { boardId } = request.params as Params;
    const board = await boardsService.get(boardId);
    if (!board) {
      throw new MyError('No board with this ID found', 404);
    }
    const { id } = request.params as Params;
    const task = tasksService.get(id);
    if (!task) {
      throw new MyError('No task with this ID found', 404);
    } else {
      reply.send(Task.toResponse(task));
    }
  });
  fastify.delete('/:id', async (request, reply) => {
    const { boardId } = request.params as Params;
    const board = await boardsService.get(boardId);
    if (!board) {
      throw new MyError('No board with this ID found', 404);
    }
    const { id } = request.params as Params;
    const task = tasksService.get(id);
    if (!task) {
      throw new MyError('No task with this ID found', 404);
    }
    tasksService.remove(id);
    reply.code(200).send({ Success: 'task deleted' });
  });
  fastify.put('/:id', async (request, reply) => {
    const { boardId } = request.params as Params;
    const board = await boardsService.get(boardId);
    if (!board) {
      throw new MyError('No board with this ID found', 404);
    }
    const { id } = request.params as Params;
    const task = tasksService.get(id);
    if (!task) {
      throw new MyError('No task with this ID found', 404);
    }
    const apdatedTask = tasksService.update(id, request.body as Task);
    if(apdatedTask) {
      reply.send({ ...Task.toResponse(apdatedTask) });
    }     
  });
}

export default taskRouter;