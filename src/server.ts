import 'reflect-metadata';
import { createConnection, getRepository } from 'typeorm';
import config from'./common/config';
import server from './fastifyApp';
import Logger from './logging/logger';
import  * as usersService from './resources/users/user.service';
import User from "./resources/users/user.entity";


const logger = new Logger();

 const {PORT} = config;


/**
 * 
 * @param port first term string or number
 */
const start = async (port: string | number): Promise<void>  => {
  try {
    await server.listen(port, '0.0.0.0');
    const userData = {
      name: "Vasily",
      login: 'admin',
      password: 'admin'
    }
    const repo = getRepository(User)
    const isThereAnAdminInTheDatabase = await repo.findOne({login: 'admin'});
    if(!isThereAnAdminInTheDatabase) await usersService.save(userData as User);
    console.log(`App is running on http://localhost:${port}`);
  } catch (err) {
    logger.printProcessError('Something went wrong');
    console.error(err);
    process.exit(1);
  }
};


createConnection().then(async(/* connection */) => {
  await start(PORT || 3000);
}).catch(err => console.log(err))


