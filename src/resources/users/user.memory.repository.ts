import User from './user.model';

const users: User[] = [];

const getAll = () => users;

const save = async (data: User) => {
  const newUser = new User(data);
  users.push(newUser);
  return newUser;
};

const get = async (userId: string | undefined) => {
  const requiredUser = users.find((user) => user.id === userId);
  return requiredUser;
};

const update = async (userId: string | undefined, newUserData: User) => {
  const requiredUser = users.find((user) => user.id === userId);
  if(requiredUser){
    requiredUser.id = newUserData.id;
    requiredUser.name = newUserData.id;
    requiredUser.login = newUserData.id;
    requiredUser.password = newUserData.id;
  }
  return requiredUser;
};

const remove = async (userId: string | undefined) => {
  const index = users.findIndex((user) => user.id === userId);
  if (index > -1) {
    users.splice(index, 1);
  }
};

export { getAll, save, get, update, remove };
