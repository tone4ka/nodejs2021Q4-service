// const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

// router.route('/').get(async (req, res) => {
//   const users = await usersService.getAll();
//   // map user fields to exclude secret fields like "password"
//   res.json(users.map(user => User.toResponse(user)));
// });
const router = function (fastify, opts, done) {
  fastify.get('/', async (request, reply) => {
    const users = await usersService.getAll();
    const usersDataToSend = await  users.map(user => User.toResponse(user));
    reply.send(usersDataToSend)
  })
  done()
}

module.exports = router;
