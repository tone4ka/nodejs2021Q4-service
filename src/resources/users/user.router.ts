import User from './user.model';
import * as usersService from './user.service';
import tasksService from '../tasks/task.service';
import {FastifyPluginAsync} from 'fastify';

interface Params {
  id: string;
}

export const router: FastifyPluginAsync = async (fastify) => {
  fastify.get('/', (_, reply) => {
    const users = usersService.getAll();
    const usersDataToSend = users.map((user: User) => User.toResponse(user));
    reply.send(usersDataToSend);
  });
  fastify.post('/', async (request, reply) => {
    const user = await usersService.save(request.body as User);
    reply.code(201).send(User.toResponse(user));
  });
  fastify.get('/:id', async (request, reply) => {
    const { id } = request.params as Params;
    const user = await usersService.get(id);
    if (!user) {
      reply.code(404);
    }
    reply.send(User.toResponse(user));
  });
  fastify.delete('/:id', async (request, reply) => {
    const { id } = request.params as Params;
    const tasks = await tasksService.getAllusersTasks(id);
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].userId = null;
    }
    await usersService.remove(id);
    reply.code(200).send({ Success: 'user deleted' });
  });
  fastify.put('/:id', async (request, reply) => {
    const { id } = request.params as Params;
    const user = await usersService.update(id, request.body as User);
    reply.send({ ...User.toResponse(user) });
  });
}

