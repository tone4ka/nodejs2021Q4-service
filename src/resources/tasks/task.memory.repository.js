const Task = require('./task.model');

const tasks = [];

const getAll = (boardId) => tasks.filter((task) => task.boardId === boardId);

const getAllusersTasks = (userId) => tasks.filter((task) => task.userId === userId);

const save = async (data) => {
  const newTask = new Task(data);
  tasks.push(newTask);
  return newTask;
};

const get = async (taskId) => {
  const requiredTask = tasks.find((task) => task.id === taskId);
  return requiredTask;
};

const update = async (taskId, newTaskData) => {
  const requiredTask = tasks.find((task) => task.id === taskId);
  const newTaskDataArr = Object.keys(newTaskData);
  for (let i = 0; i < newTaskDataArr.length; i += 1) {
    const key = newTaskDataArr[i];
    requiredTask[key] = newTaskData[key];
  }
  return requiredTask;
};

const remove = async (taskId) => {
  const index = tasks.findIndex((task) => task.id === taskId);
  if (index > -1) {
    tasks.splice(index, 1);
  }
};

module.exports = { getAll, save, get, update, remove, getAllusersTasks };
