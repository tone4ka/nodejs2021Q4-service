import User from './user.model';

const users: User[] = [];

/**
 * Returns an array that contains of the saved User objects
 * @returns an array that contains of the saved User objects
 */
const getAll = (): User[] => users;

/**
 * Saves new user in data base
 * @param data user data object
 * @returns User object
 */
const save = (data: User): User => {
  const newUser = new User(data);
  users.push(newUser);
  return newUser;
};

/**
 * Returns required user from data base
 * @param userId string
 * @returns required user if it is in data base or undefined if it isn't
 */
const get = (userId: string | undefined): User | void => {
  const requiredUser = users.find((user) => user.id === userId);
  return requiredUser;
};

/**
 * 
 * Update user in data base with new data
 * @param userId string
 * @param newUserData new user data object
 * @returns updated user if it is in data base or undefined if it isn't
 */
const update = (userId: string | undefined, newUserData: User): User | void => {
  const requiredUser = users.find((user) => user.id === userId);
  if(requiredUser){
    requiredUser.id = newUserData.id;
    requiredUser.name = newUserData.name;
    requiredUser.login = newUserData.login;
    requiredUser.password = newUserData.password;
  }
  return requiredUser;
};

/**
 * Removes a user from the database
 * @param userId string
 */
const remove = (userId: string | undefined): void => {
  const index = users.findIndex((user) => user.id === userId);
  if (index > -1) {
    users.splice(index, 1);
  }
};

export { getAll, save, get, update, remove };
