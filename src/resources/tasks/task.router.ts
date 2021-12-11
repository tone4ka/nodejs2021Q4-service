import Task from './task.model';
import * as tasksService from './task.service';
import {FastifyPluginAsync} from 'fastify';

interface Params {
  id: string;
  boardId: string | undefined;
}

export const router: FastifyPluginAsync = async (fastify) => {
  fastify.get('/', async (request, reply) => {
    const { boardId } = request.params as Params;
    const tasks = tasksService.getAll(boardId);
    reply.send(tasks);
  });
  fastify.post('/', async (request, reply) => {
    const data = request.body as Task;
    const { boardId } = request.params as Params;
    data.boardId = boardId;
    const task = tasksService.save(data);
    reply.code(201).send(Task.toResponse(task));
  });
  fastify.get('/:id', async (request, reply) => {
    const { id } = request.params as Params;
    const task = tasksService.get(id);
    if (!task) {
      reply.code(404);
      reply.send('not found');
    } else {
      reply.send(Task.toResponse(task));
    }
  });
  fastify.delete('/:id', async (request, reply) => {
    const { id } = request.params as Params;
    tasksService.remove(id);
    reply.code(200).send({ Success: 'task deleted' });
  });
  fastify.put('/:id', async (request, reply) => {
    const { id } = request.params as Params;
    const task = tasksService.update(id, request.body as Task);
    if(task) {
      reply.send({ ...Task.toResponse(task) });
    } else {
      reply.send('not found');
    }
    
  });
}
