import { FastifyRequest } from 'fastify';

class Logger {
    //Тут можно использовать переменную окружения для определения логгирования?
    //  req: FastifyRequest | string;
    //  reply: FastifyReply | string;
    // constructor({
    //   req = 'request',
    //   reply = 'reply'
    // } = {}) {
    //   this.req = req;
    //   this.reply = reply;
    // }

    print( req: FastifyRequest, statusCode: number | string) {
        console.log(req.url);
        console.log(req.body);
        console.log(req.query);//parameters?
        
        console.log(statusCode);
    }
};

export default Logger;