import {getRepository} from "typeorm";
import bcrypt from 'bcryptjs';
import User from "./user.entity";

function getUserPublicData(user: User) {
  const {id, name, login} = user
  return {id, name, login}
}
/**
 * Returns an array that contains of the saved User objects
 * @returns an array that contains of the saved User objects
 */
const getAll =  async (): Promise<Omit<User, 'password'>[] | void> => {
  const repo = getRepository(User);
  const users = await repo.find();
  return users.map((user) => getUserPublicData(user));
};

/**
 * Saves new user in data base
 * @param data user data object
 * @returns User object
 */
const save = async (data: User): Promise<Omit<User, 'password'>> => {
  const hashPassword = await bcrypt.hash(
    data.password,
    10 
  );
  const dataWithHash = {...data};
  dataWithHash.password = hashPassword
  const repo = getRepository(User);
  const newUser = repo.create(dataWithHash);
  await repo.save(newUser);
  return getUserPublicData(newUser)
};

/**
 * Returns required user from data base
 * @param userId string
 * @returns required user if it is in data base or undefined if it isn't
 */
const get = async (userId: string): Promise<Omit<User, 'password'> | void> => {
  const repo = getRepository(User)
  const user = await repo.findOne(userId)
  if (user) return getUserPublicData(user);
  return user;
};

const getByLogin = async (login: string): Promise<User | void> => {
  const repo = getRepository(User)
  const user = await repo.findOne({login})
  if (user) return user;
  return user;
};

/**
 * 
 * Update user in data base with new data
 * @param userId string
 * @param newUserData new user data object
 * @returns updated user if it is in data base or undefined if it isn't
 */
const update = async (userId: string, newUserData: User): Promise<Omit<User, 'password'> | void> => {
  const repo = getRepository(User);
    const updatedUser = await repo.update(userId, newUserData);
    return getUserPublicData(updatedUser.raw);
}

/**
 * Removes a user from the database
 * @param userId string
 */
const remove = async (userId: string): Promise<void> => {
  const repo = getRepository(User);
  await repo.delete(userId)
};

export { getAll, save, get, update, remove, getByLogin };
