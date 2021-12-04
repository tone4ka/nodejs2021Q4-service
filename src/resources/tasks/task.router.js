const Task = require('./task.model');
const tasksService = require('./task.service');

const router = function (fastify, opts, done) {
  fastify.get('/', async (request, reply) => {
    const tasks = await tasksService.getAll();
    const tasksDataToSend = await tasks.map((task) => Task.toResponse(task));
    reply.send(tasksDataToSend);
  });
  fastify.post('/', async (request, reply) => {
    const task = await tasksService.save(request.body);
    reply.code(201).send(Task.toResponse(task));
  });
  fastify.get('/:id', async (request, reply) => {
    const task = await tasksService.get(request.params.id);
    reply.send(Task.toResponse(task));
  });
  fastify.delete('/:id', async (request, reply) => {
    await tasksService.remove(request.params.id);
    reply.code(200).send({ Success: 'task deleted' });
  });
  fastify.put('/:id', async (request, reply) => {
    const task = await tasksService.update(request.params.id, request.body);
    reply.send({ ...Task.toResponse(task) });
  });

  done();
};

module.exports = router;
