const User = require('./user.model');
const usersService = require('./user.service');

const router = function (fastify, opts, done) {
  fastify.get('/', async (request, reply) => {
    const users = await usersService.getAll();
    const usersDataToSend = await users.map((user) => User.toResponse(user));
    reply.send(usersDataToSend);
  });
  fastify.post('/', async (request, reply) => {
    const user = await usersService.save(request.body);
    reply.code(201).send(User.toResponse(user));
  });
  fastify.get('/:id', async (request, reply) => {
    const user = await usersService.get(request.params.id);
    if(!user){
      reply.code(404)
    }
    reply.send(User.toResponse(user));
  });
  fastify.delete('/:id', async (request, reply) => {
    await usersService.remove(request.params.id);
    reply.code(200).send({ Success: 'user deleted' });
  });
  fastify.put('/:id', async (request, reply) => {
    const user = await usersService.update(request.params.id, request.body);
    reply.send({ ...User.toResponse(user) });
  });

  done();
};

module.exports = router;
