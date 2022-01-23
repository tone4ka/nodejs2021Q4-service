import * as usersRepo from './user.memory.repository';
import User from "./user.entity";

/**
 * Returns an array that contains of the saved User objects
 * @returns an array that contains of the saved User objects
 */
const getAll = async (): Promise<Omit<User, 'password'>[] | void> => await usersRepo.getAll();

/**
 * Saves new user in data base
 * @param user user data object
 * @returns User object
 */
const save = async (user: User): Promise<Omit<User, 'password'> | void> => await usersRepo.save(user);

/**
 * Returns required user from data base
 * @param userId string
 * @returns required user if it is in database or undefined if it isn't
 */
const get = async (userId: string): Promise<Omit<User, 'password'> | void> => await usersRepo.get(userId);

const getByLogin = async (login: string): Promise<User | void> => await usersRepo.getByLogin(login);

/**
 * Updates user in data base with new data
 * @param userId string
 * @param newUserData new user data object
 * @returns updated user if it is in database or undefined if it isn't
 */
const update = async (userId: string, newUserData: User): Promise<Omit<User, 'password'> | void> => await usersRepo.update(userId, newUserData);

/**
 * Removes a user from the database
 * @param userId string
 */
const remove = async (userId: string): Promise<void> => await usersRepo.remove(userId);

export { getAll, save, get, update, remove, getByLogin };
