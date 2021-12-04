const usersRepo = require('./user.memory.repository');
const User = require('./user.model')

const getAll = () => usersRepo.getAll();
const save = (user) => usersRepo.save(new User(user));
const get = (userId) => usersRepo.get(userId);
const update = (userId, newUserData) => usersRepo.update(userId, newUserData);
const remove = (userId) => usersRepo.remove(userId);

module.exports = { getAll, save, get, update, remove };
