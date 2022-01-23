import {FastifyPluginAsync} from 'fastify';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from '../../common/config';
import MyError from '../../errorHandling/myError';
import * as usersService from '../users/user.service';

const { JWT_SECRET_KEY } = config;

interface AuthData {
    authData: {
        login:string,
        password:string
    }
  }

 const loginRouter: FastifyPluginAsync = async (fastify) => {
    fastify.post('/', async (req, reply) => {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        console.log(req.body);
        const secretKey: string = JWT_SECRET_KEY ? JWT_SECRET_KEY : 'secret-key';
        const data: AuthData["authData"] = req.body as AuthData["authData"]
        if(req.body){
            const isThereAnUserInTheDatabase = await usersService.getByLogin(data.login);
            if(isThereAnUserInTheDatabase) {
                const areSame = await bcrypt.compare(data.password, isThereAnUserInTheDatabase.password);
                if(!areSame) throw new MyError("invalid password", 401);

                const token = jwt.sign(data, secretKey);
                reply.code(201).send({ token });
            } else {
                throw new MyError("there is no user with this login in the database", 403);
            }
        } else {
            throw new MyError('Uncorrect auth parameters', 401);
        }        
    });
};

export default loginRouter;