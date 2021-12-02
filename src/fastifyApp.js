// Require the framework and instantiate it
// const fastify = require('fastify')({ logger: true });
// __________________________________________________________________________
// // Declare a route
// fastify.get('/', async (request, reply) => {
//   return { hello: 'world' }
// })

// // Run the server!
// const start = async () => {
//   try {
//     await fastify.listen(3000)
//   } catch (err) {
//     fastify.log.error(err)
//     process.exit(1)
//   }
// }
// start()
// __________________________________________________________________________
// fastify.route({
//   method: 'GET',
//   url: '/',
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
//   // this function is executed for every request before the handler is executed
//   preHandler: async (request, reply) => {
//     // E.g. check authentication
//   },
//   handler: async (request, reply) => {
//     return { hello: 'world' };
//   },
// });
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
// __________________________________________________________________________
