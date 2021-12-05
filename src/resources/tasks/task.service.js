const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model')

const getAll = () => tasksRepo.getAll();
const save = (task) => tasksRepo.save(new Task(task));
const get = (taskId) => tasksRepo.get(taskId);
const update = (taskId, newTaskData) => tasksRepo.update(taskId, newTaskData);
const remove = (taskId) => tasksRepo.remove(taskId);

module.exports = { getAll, save, get, update, remove };
