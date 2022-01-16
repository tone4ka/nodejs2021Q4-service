import {FastifyPluginAsync} from 'fastify';
import User from "./user.entity";
import * as usersService from './user.service';
import * as tasksService from '../tasks/task.service';
import Task from '../tasks/task.entity';
import MyError from '../../errorHandling/myError';

interface Params {
  id: string;
}

/**
 * Routing with prefix '/users'
 * @param fastify FastifyInstance
 */
const userRouter: FastifyPluginAsync = async (fastify) => {
  fastify.get('/', async (_, reply) => {
    const users = await usersService.getAll();
    reply.send(users);
  });
  fastify.post('/', async (request, reply) => {
    const user = await usersService.save(request.body as User);
    reply.code(201).send(user);
  });
  fastify.get('/:id', async (request, reply) => {
    const { id } = request.params as Params;
    const user = await usersService.get(id);
    if (!user) {
      throw new MyError('No user with this ID found', 404);
    }
    reply.send(user);
  });
  fastify.delete('/:id', async (request, reply) => {
    const { id } = request.params as Params;
    const user = await usersService.get(id);
    if (!user) {
      throw new MyError('No user with this ID found', 404);
    }
    const tasks = await tasksService.getAllusersTasks(id);
    if(tasks){
      let i = 0;
      while (i < tasks.length) {
        const task = tasks[i] as Task;
        task.userId = null
        await tasksService.update(task.id, task);
        i += 1
      }
    }
    usersService.remove(id);
    reply.code(200).send({ Success: 'user deleted' });
  });
  fastify.put('/:id', async (request, reply) => {
    const { id } = request.params as Params;
    const user = await usersService.get(id);
    if (!user) {
      throw new MyError('No user with this ID found', 404);
    }
    const updatedUser =  await usersService.update(id, request.body as User);
    reply.send({ ...updatedUser });
  });
}

export default userRouter;

