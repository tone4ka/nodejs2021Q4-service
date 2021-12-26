import {FastifyPluginAsync} from 'fastify';
import Board from './board.model';
import * as boardsService from './board.service';
import * as tasksService from '../tasks/task.service';
import Task from '../tasks/task.model';
import MyError from '../../errorHandling/myError';

interface Params {
  id: string;
}

/**
 * Routing with prefix '/boards'
 * @param fastify FastifyInstance 
 */
const boardRouter: FastifyPluginAsync = async (fastify) => {
  fastify.get('/', (_, reply) => {
    const boards = boardsService.getAll();
    const boardsDataToSend = boards.map((board) =>
      Board.toResponse(board)
    );
    reply.send(boardsDataToSend);
  });
  fastify.post('/', async (request, reply) => {
    const board = await boardsService.save(request.body as Board);
    reply.code(201).send(Board.toResponse(board));
  });
  fastify.get('/:id', async (request, reply) => {
    const { id } = request.params as Params;
    const board = await boardsService.get(id);
    if (!board) {
      throw new MyError('No board with this ID found', 404);
    }
    reply.send(Board.toResponse(board));
  });
  fastify.delete('/:id', async (request, reply) => {
    const { id } = request.params as Params;
    const board = await boardsService.get(id);
    if (!board) {
      throw new MyError('No board with this ID found', 404);
    }
    const tasks = tasksService.getAll(id);
    let i = 0;
    while (i < tasks.length) {
      const task = tasks[i] as Task
      tasksService.remove(task.id);
      i += 1;
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
    reply.send({ ...Board.toResponse(apdatedBoard as Board) });
  });
}

export default boardRouter;
