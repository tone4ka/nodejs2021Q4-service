import * as usersRepo from './user.memory.repository';
import User from './user.model';

const getAll = (): User[] => usersRepo.getAll();
const save = (user: User): Promise<User> => usersRepo.save(new User(user));
const get = (userId: string | undefined): Promise<User> => usersRepo.get(userId) as Promise<User>;
const update = (userId: string | undefined, newUserData: User): Promise<User> => usersRepo.update(userId, newUserData) as Promise<User>;
const remove = (userId: string | undefined): Promise<void> => usersRepo.remove(userId);

export { getAll, save, get, update, remove };
