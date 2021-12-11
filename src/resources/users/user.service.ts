import * as usersRepo from './user.memory.repository';
import User from './user.model';

const getAll = (): User[] => usersRepo.getAll();
const save = (user: User): User => usersRepo.save(new User(user));
const get = (userId: string | undefined): User | void => usersRepo.get(userId);
const update = (userId: string | undefined, newUserData: User): User | void => usersRepo.update(userId, newUserData);
const remove = (userId: string | undefined): void => usersRepo.remove(userId);

export { getAll, save, get, update, remove };
