import { FastifyRequest, FastifyReply } from 'fastify';
import fs from 'fs';
import MyError from '../errorHandling/myError';

export default (fileName: string, req: FastifyRequest, reply: FastifyReply) => {
    const statusCode = +reply.statusCode;
  fs.appendFile(
    `./logs/${fileName}`,
    `
        ---------------------
        Response status code: ${statusCode}
    
        URL: ${req.url}
    
        Body:
        ${JSON.stringify(req.body)}
    
        Query parameters:
        ${JSON.stringify(req.query)}
        ---------------------
        `,
    (err) => {
      if (err) throw new MyError(err.message, 500);
    }
  );
};
