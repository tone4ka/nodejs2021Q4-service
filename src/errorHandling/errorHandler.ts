import { FastifyRequest, FastifyReply } from 'fastify';
import myError from './myError';

const errorHandler = ( err: Error, _:FastifyRequest, reply:FastifyReply) => {
    if(err instanceof myError) {
      reply.status(+err.name);
      reply.send({ message: err.message })
    } else {
      reply.status(500);
      reply.send({ message: 'Something went wrong' });
    }

  }

  export default errorHandler;