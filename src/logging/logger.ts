import { FastifyRequest } from 'fastify';
import fs from 'fs';
import config from '../common/config';

const { LOGGING_LEVEL } = config;

class Logger {
  print(req: FastifyRequest, statusCode: number | string) {
    const lvl = LOGGING_LEVEL || '0';
    if (
      (lvl === '0' && +statusCode >= 500) ||
      (lvl === '1' && +statusCode >= 400) ||
      lvl === '2'
    ) {
      let color;
      if (+statusCode < 400) {
        color = '\x1b[32m%s\x1b[0m';
      } else if (+statusCode < 500) {
        color = '\x1b[36m%s\x1b[0m';
      } else {
        color = '\x1b[31m%s\x1b[0m';
      }
      console.log(color, `---------------------`);
      console.log(color, `URL: ${req.url}`);
      console.log(color, `Body:`);
      console.log(color, req.body);
      console.log(color, 'Query parameters:');
      console.log(color, req.query);
      console.log(color, `Response status code: ${statusCode}`);
      console.log(color, `---------------------`);

      fs.appendFile(
        './logs/log.txt',
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
          if (err) console.log(err);
        }
      );

      if (+statusCode >= 400) {
        fs.appendFile(
          './logs/errors.txt',
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
            if (err) console.log(err);
          }
        );
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
