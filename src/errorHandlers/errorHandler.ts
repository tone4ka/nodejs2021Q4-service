
import { FastifyRequest, FastifyReply } from 'fastify';
export const errorHandler = function ( err: Error, _:FastifyRequest, reply:FastifyReply) {
    // Log error
    console.log('!!!!!!!!!!!!!!!');
    console.log(err)
    // Send error response
    reply.status(411);
    reply.send({ ok: false })
  }