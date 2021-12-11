import User from './user.model';

const users: User[] = [];

const getAll = (): User[] => users;

const save = (data: User): User => {
  const newUser = new User(data);
  users.push(newUser);
  return newUser;
};

const get = (userId: string | undefined): User | void => {
  const requiredUser = users.find((user) => user.id === userId);
  return requiredUser;
};

const update = (userId: string | undefined, newUserData: User): User | void => {
  const requiredUser = users.find((user) => user.id === userId);
  if(requiredUser){
    requiredUser.id = newUserData.id;
    requiredUser.name = newUserData.id;
    requiredUser.login = newUserData.id;
    requiredUser.password = newUserData.id;
  }
  return requiredUser;
};

const remove = (userId: string | undefined): void => {
  const index = users.findIndex((user) => user.id === userId);
  if (index > -1) {
    users.splice(index, 1);
  }
};

export { getAll, save, get, update, remove };
