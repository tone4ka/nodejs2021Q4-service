import {FastifyPluginAsync} from 'fastify';
import User from './user.model';
import * as usersService from './user.service';
import * as tasksService from '../tasks/task.service';
import Task from '../tasks/task.model';
import MyError from '../../errorHandling/myError';

interface Params {
  id: string;
}

/**
 * Routing with prefix '/users'
 * @param fastify FastifyInstance
 */
const userRouter: FastifyPluginAsync = async (fastify) => {
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
      throw new MyError('No user with this ID found', 404);
    }
    reply.send(User.toResponse(user as User));
  });
  fastify.delete('/:id', (request, reply) => {
    const { id } = request.params as Params;
    const user = usersService.get(id);
    if (!user) {
      throw new MyError('No user with this ID found', 404);
    }
    const tasks = tasksService.getAllusersTasks(id);
    for (let i = 0; i < tasks.length; i += 1) {
      const task = tasks[i] as Task;
      task.userId = null
      tasksService.update(task.id, task);
    }
    usersService.remove(id);
    reply.code(200).send({ Success: 'user deleted' });
  });
  fastify.put('/:id', (request, reply) => {
    const { id } = request.params as Params;
    const user = usersService.get(id);
    if (!user) {
      throw new MyError('No user with this ID found', 404);
    }
    const updatedUser =  usersService.update(id, request.body as User);
    reply.send({ ...User.toResponse(updatedUser as User) });
  });
}

export default userRouter;

