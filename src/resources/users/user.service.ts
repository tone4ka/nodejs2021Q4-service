import * as usersRepo from './user.memory.repository';
import User from './user.model';

export const getAll = (): User[] => usersRepo.getAll();
export const save = (user: User): Promise<User> => usersRepo.save(new User(user));
export const get = (userId: string | undefined): Promise<User> => usersRepo.get(userId) as Promise<User>;
export const update = (userId: string | undefined, newUserData: User): Promise<User> => usersRepo.update(userId, newUserData) as Promise<User>;
export const remove = (userId: string | undefined): Promise<void> => usersRepo.remove(userId);

module.exports = { getAll, save, get, update, remove };
