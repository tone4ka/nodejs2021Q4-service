import config from'./common/config';
import server from './fastifyApp';
import Logger from './logging/logger';

const logger = new Logger();

 const {PORT} = config;


/**
 * 
 * @param port first term string or number
 */
const start = async (port: string | number): Promise<void>  => {
  try {
    await server.listen(port, '0.0.0.0');
    console.log(`App is running on http://localhost:${port}`);
  } catch (err) {
    logger.printProcessError('Something went wrong');
    console.error(err);
    process.exit(1);
  }
};
start(PORT || 3000);

