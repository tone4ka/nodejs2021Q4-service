import { FastifyRequest } from 'fastify';
import fs from 'fs';
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

  print(req: FastifyRequest, statusCode: number | string) {
    const color =
      +statusCode < 400
        ? '\x1b[32m%s\x1b[0m'
        : +statusCode < 500
        ? '\x1b[36m%s\x1b[0m'
        : '\x1b[31m%s\x1b[0m';
    console.log(color, `---------------------`);
    console.log(color, `URL: ${req.url}`);
    console.log(color, `Body:`);
    console.log(color, req.body);
    console.log(color, 'Query parameters:');
    console.log(color, req.query);
    console.log(color, `Response status code: ${statusCode}`);
    console.log(color, `---------------------`);
    fs.appendFile('./logs/log.txt', `
    ---------------------
    Response status code: ${statusCode}

    URL: ${req.url}

    Body:
    ${JSON.stringify(req.body)}

    Query parameters:
    ${JSON.stringify(req.query)}
    ---------------------
    `, (err) => {
        if(err) console.log(err);
    })

  }
}

export default Logger;
