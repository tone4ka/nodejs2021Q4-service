// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });
// __________________________________________________________________________
fastify.route({
  method: 'POST',
  url: '/',
  //   schema: {
  //     // request needs to have a querystring with a `name` parameter
  //     querystring: {
  //       name: { type: 'string' },
  //     },
  //     // the response needs to be an object with an `hello` property of type 'string'
  //     response: {
  //       200: {
  //         type: 'object',
  //         properties: {
  //           hello: { type: 'string' },
  //         },
  //       },
  //     },
  //   },
  handler: async (request, reply) => {
    setImmediate(() => {
      reply.send({ hello: request.body.name });
    });
    await reply;
    // return { hello: request.body.name };
  },
});
// __________________________________________________________________________
//   fastify.register(require('./routes/events'), { prefix: '/' })

// fastify.register(function (instance, opts, done) {
//     instance.get('/foo', function (request, reply) {
//       // Will log "prefix: /v1"
//       request.log.info('prefix: %s', instance.prefix)
//       reply.send({ prefix: instance.prefix })
//     })

//     instance.register(function (instance, opts, done) {
//       instance.get('/bar', function (request, reply) {
//         // Will log "prefix: /v1/v2"
//         request.log.info('prefix: %s', instance.prefix)
//         reply.send({ prefix: instance.prefix })
//       })

//       done()
//     }, { prefix: '/v2' })

//     done()
//   }, { prefix: '/v1' })

//   export const userRoutes = (fastify, options, done) => {
//     fastify.get('/users', async (req, res) => {
//       const users = await getAll();
//       res.send(users.map(User.toResponse));
//     });

//     done();
//   };

// fastify.register(function (instance, opts, done) {
//     instance.get('/foo', function (request, reply) {
//       // Will log "prefix: /v1"
//       request.log.info('prefix: %s', instance.prefix)
//       reply.send({ prefix: instance.prefix })
//     })

//     instance.register(function (instance, opts, done) {
//       instance.get('/bar', function (request, reply) {
//         // Will log "prefix: /v1/v2"
//         request.log.info('prefix: %s', instance.prefix)
//         reply.send({ prefix: instance.prefix })
//       })

//       done()
//     }, { prefix: '/v2' })

//     done()
//   }, { prefix: '/v1' })
// __________________________________________________________________________

module.exports = fastify;
