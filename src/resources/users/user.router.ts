import {FastifyPluginAsync} from 'fastify';
import User from './user.model';
import * as usersService from './user.service';
import * as tasksService from '../tasks/task.service';
import Task from '../tasks/task.model';
import Logger from '../../logging/logger';

const loogger = new Logger();

interface Params {
  id: string;
}

/**
 * Routing with prefix '/users'
 * @param fastify FastifyInstance
 */
const userRouter: FastifyPluginAsync = async (fastify) => {
  fastify.get('/', (request, reply) => {
    const users = usersService.getAll();
    const usersDataToSend = users.map((user: User) => User.toResponse(user));
    loogger.print(request, reply.statusCode);
    reply.send(usersDataToSend);
  });
  fastify.post('/', (request, reply) => {
    const user = usersService.save(request.body as User);
    loogger.print(request, 201);
    reply.code(201).send(User.toResponse(user));
  });
  fastify.get('/:id', (request, reply) => {
    const { id } = request.params as Params;
    const user = usersService.get(id);
    if (!user) {
      loogger.print(request, 404);
      reply.code(404);
    }
    loogger.print(request, reply.statusCode);
    reply.send(User.toResponse(user as User));
  });
  fastify.delete('/:id', (request, reply) => {
    const { id } = request.params as Params;
    const tasks = tasksService.getAllusersTasks(id);
    for (let i = 0; i < tasks.length; i += 1) {
      const task = tasks[i] as Task;
      task.userId = null
      tasksService.update(task.id, task);
    }
    usersService.remove(id);
    loogger.print(request, 200);
    reply.code(200).send({ Success: 'user deleted' });
  });
  fastify.put('/:id', (request, reply) => {
    const { id } = request.params as Params;
    const user =  usersService.update(id, request.body as User);
    loogger.print(request, reply.statusCode);
    reply.send({ ...User.toResponse(user as User) });
  });
}

export default userRouter;

