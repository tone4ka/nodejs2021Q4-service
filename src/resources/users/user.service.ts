import * as usersRepo from './user.memory.repository';
import User from './user.model';

/**
 * Returns an array that contains of the saved User objects
 * @returns an array that contains of the saved User objects
 */
const getAll = (): User[] => usersRepo.getAll();

/**
 * Saves new user in data base
 * @param user user data object
 * @returns User object
 */
const save = (user: User): User => usersRepo.save(new User(user));

/**
 * Returns required user from data base
 * @param userId string
 * @returns required user if it is in database or undefined if it isn't
 */
const get = (userId: string): User | void => usersRepo.get(userId);

/**
 * Updates user in data base with new data
 * @param userId string
 * @param newUserData new user data object
 * @returns updated user if it is in database or undefined if it isn't
 */
const update = (userId: string, newUserData: User): User | void => usersRepo.update(userId, newUserData);

/**
 * Removes a user from the database
 * @param userId string
 */
const remove = (userId: string): void => usersRepo.remove(userId);

export { getAll, save, get, update, remove };
