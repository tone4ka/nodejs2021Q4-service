import * as usersRepo from './user.memory.repository';
import User from "./user.entity";

/**
 * Returns an array that contains of the saved User objects
 * @returns an array that contains of the saved User objects
 */
const getAll = (): Promise<Omit<User, 'password'>[] | void> => usersRepo.getAll();

/**
 * Saves new user in data base
 * @param user user data object
 * @returns User object
 */
const save = (user: User): Promise<Omit<User, 'password'> | void> => usersRepo.save(user);

/**
 * Returns required user from data base
 * @param userId string
 * @returns required user if it is in database or undefined if it isn't
 */
const get = (userId: string): Promise<Omit<User, 'password'> | void> => usersRepo.get(userId);

/**
 * Updates user in data base with new data
 * @param userId string
 * @param newUserData new user data object
 * @returns updated user if it is in database or undefined if it isn't
 */
const update = (userId: string, newUserData: User): Promise<Omit<User, 'password'> | void> => usersRepo.update(userId, newUserData);

/**
 * Removes a user from the database
 * @param userId string
 */
const remove = (userId: string): Promise<void> => usersRepo.remove(userId);

export { getAll, save, get, update, remove };
