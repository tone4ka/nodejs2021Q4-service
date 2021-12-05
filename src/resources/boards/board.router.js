const Board = require('./board.model');
const boardsService = require('./board.service');
const { tasks } = require('../constants');
const tasksService = require('../tasks/task.service');

function router(fastify, opts, done) {
  fastify.get('/', async (request, reply) => {
    const boards = await boardsService.getAll();
    const boardsDataToSend = await boards.map((board) =>
      Board.toResponse(board)
    );
    reply.send(boardsDataToSend);
  });
  fastify.post('/', async (request, reply) => {
    const board = await boardsService.save(request.body);
    reply.code(201).send(Board.toResponse(board));
  });
  fastify.get('/:id', async (request, reply) => {
    const board = await boardsService.get(request.params.id);
    if (!board) {
      reply.code(404);
    }
    reply.send(Board.toResponse(board));
  });
  fastify.delete('/:id', async (request, reply) => {
    const len  = await tasksService.getAll();
    let i = 0;
    while (i < len.length) {
      if (tasks[i].boardId === request.params.id) {
        tasksService.remove(tasks[i].id);
      }
      i += 1;
    };
    await boardsService.remove(request.params.id);
    reply.code(200).send({ Success: 'board deleted' });

  });
  fastify.put('/:id', async (request, reply) => {
    const board = await boardsService.update(request.params.id, request.body);
    reply.send({ ...Board.toResponse(board) });
  });

  done();
}

module.exports = router;
