import {FastifyPluginAsync} from 'fastify';
import Board from '../boards/board.entity';
import * as boardsService from './board.service';
import * as tasksService from '../tasks/task.service';
import Task from '../tasks/task.entity';
import MyError from '../../errorHandling/myError';

interface Params {
  id: string;
}

/**
 * Routing with prefix '/boards'
 * @param fastify FastifyInstance 
 */
const boardRouter: FastifyPluginAsync = async (fastify) => {
  fastify.get('/', async (_, reply) => {
    const boards = await boardsService.getAll();
    reply.send(boards);
  });
  fastify.post('/', async (request, reply) => {
    const board = await boardsService.save(request.body as Board);
    reply.code(201).send(board);
  });
  fastify.get('/:id', async (request, reply) => {
    const { id } = request.params as Params;
    const board = await boardsService.get(id);
    if (!board) {
      throw new MyError('No board with this ID found', 404);
    }
    reply.send(board);
  });
  fastify.delete('/:id', async (request, reply) => {
    const { id } = request.params as Params;
    const board = await boardsService.get(id);
    if (!board) {
      throw new MyError('No board with this ID found', 404);
    }
    const tasks = await tasksService.getAll(id);
    
    if(tasks){
      let i = 0;
      while (i < tasks.length) {
        await tasksService.remove(tasks[i] as Task);
        i +=1;
      }
    }

    await boardsService.remove(id);
    reply.code(200).send({ Success: 'board deleted' });
  });
  fastify.put('/:id', async (request, reply) => {
    const { id } = request.params as Params;

    const board = await boardsService.get(id);
    if (!board) {
      throw new MyError('No board with this ID found', 404);
    }

    const apdatedBoard = await boardsService.update(id, request.body as Board);
    reply.send({ ...apdatedBoard});
  });
}

export default boardRouter;
