import { FastifyRequest, FastifyReply } from 'fastify';
import fs from 'fs';
import config from '../common/config';
import setColor from './setColor';
import printToConsole from './printToConsole';
import printToFile from './printToFile';

const { LOGGING_LEVEL } = config;

class Logger {
  print(req: FastifyRequest, reply: FastifyReply) {
    const lvl = LOGGING_LEVEL || '0';
    if (
      (lvl === '0' && +reply.statusCode >= 500) ||
      (lvl === '1' && +reply.statusCode >= 400) ||
      lvl === '2'
    ) {
      const color = setColor(reply.statusCode);

      printToConsole(color, req, reply.statusCode);
      printToFile('log.txt', req, reply);
      if(+reply.statusCode >= 400) {
        printToFile('errors.txt', req, reply);
      }

    }
  }

  printProcessError(message: string) {
    const color = '\x1b[31m%s\x1b[0m';
    console.log(color, `---------------------`);
    console.log(color, `ERROR: ${message}`);
    console.log(color, `---------------------`);
    fs.appendFile(
      './logs/errors.txt',
      `
    ---------------------
    ERROR: ${message}
    ---------------------
    `,
      (err) => {
        if (err) console.log(err);
      }
    );
  }
}

export default Logger;
