const User = require('./user.model');

const users = [];
// const {tasks} = require('../constants');

const getAll = async () => users;

const save = async (data) => {
  const newUser = new User(data);
  users.push(newUser);
  return newUser;
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
  // users.array.forEach(task => {
  //   if(task.userId === userId) task.userId = null;
  // });
  if (index > -1) {
    users.splice(index, 1);
  }
};

module.exports = { getAll, save, get, update, remove };
