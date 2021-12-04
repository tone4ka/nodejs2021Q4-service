const User = require('./user.model');

const users = [];

const getAll = async () => users;

const save = async (data) => {
  users.push(new User(data));
};

const get = async (userId) => {
  const requiredUser = users.find((user) => user.id === userId);
  return requiredUser;
};

const update = async (userId, newUserData) => {
  const requiredUser = users.find((user) => user.id === userId);
  const newUserDataArr = Object.keys(newUserData);
  for (let i = 0; i < newUserDataArr.length; i += 1) {
    const key = newUserDataArr[i];
    requiredUser[key] = newUserData[key];
  }
  return requiredUser;
};

const remove = async (userId) => {
  const index = users.findIndex((user) => user.id === userId);
  if (index > -1) {
    users.splice(index, 1);
  }
};

module.exports = { getAll, save, get, update, remove };
