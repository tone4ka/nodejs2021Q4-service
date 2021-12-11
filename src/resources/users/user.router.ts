import User from './user.model';
import * as usersService from './user.service';
import * as tasksService from '../tasks/task.service';
import {FastifyPluginAsync} from 'fastify';
import Task from '../tasks/task.model';

interface Params {
  id: string;
}

export const router: FastifyPluginAsync = async (fastify) => {
  fastify.get('/', (_, reply) => {
    const users = usersService.getAll();
    const usersDataToSend = users.map((user: User) => User.toResponse(user));
    reply.send(usersDataToSend);
  });
  fastify.post('/', (request, reply) => {
    const user = usersService.save(request.body as User);
    reply.code(201).send(User.toResponse(user));
  });
  fastify.get('/:id', (request, reply) => {
    const { id } = request.params as Params;
    const user = usersService.get(id);
    if (!user) {
      reply.code(404);
    }
    reply.send(User.toResponse(user as User));
  });
  fastify.delete('/:id', (request, reply) => {
    const { id } = request.params as Params;
    const tasks = tasksService.getAllusersTasks(id);
    for (let i = 0; i < tasks.length; i += 1) {
      tasksService.save({...tasks[i] as Task, userId: null});
    }
    usersService.remove(id);
    reply.code(200).send({ Success: 'user deleted' });
  });
  fastify.put('/:id', (request, reply) => {
    const { id } = request.params as Params;
    const user =  usersService.update(id, request.body as User);
    reply.send({ ...User.toResponse(user as User) });
  });
}

