import { FastifyRequest } from 'fastify';

export default (color: string, req: FastifyRequest, statusCode: string | number) => {
    console.log(color, `---------------------`);
    console.log(color, `URL: ${req.url}`);
    console.log(color, `Body:`);
    console.log(color, req.body);
    console.log(color, 'Query parameters:');
    console.log(color, req.query);
    console.log(color, `Response status code: ${statusCode}`);
    console.log(color, `---------------------`);
}