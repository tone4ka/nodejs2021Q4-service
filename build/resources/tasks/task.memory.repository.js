"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllusersTasks = exports.remove = exports.update = exports.get = exports.save = exports.getAll = void 0;
const tasks = [];
const getAll = (boardId) => tasks.filter((task) => task.boardId === boardId);
exports.getAll = getAll;
const getAllusersTasks = (userId) => tasks.filter((task) => task.userId === userId);
exports.getAllusersTasks = getAllusersTasks;
const save = (data) => {
    const newTask = data;
    tasks.push(newTask);
    return newTask;
};
exports.save = save;
const get = (taskId) => {
    const requiredTask = tasks.find((task) => task.id === taskId);
    return requiredTask;
};
exports.get = get;
const update = (taskId, newTaskData) => {
    const requiredTask = tasks.find((task) => task.id === taskId);
    if (requiredTask) {
        requiredTask.id = newTaskData.id;
        requiredTask.title = newTaskData.title;
        requiredTask.description = newTaskData.description;
        requiredTask.userId = newTaskData.userId;
        requiredTask.boardId = newTaskData.boardId;
        requiredTask.columnId = newTaskData.columnId;
        requiredTask.order = newTaskData.order;
    }
    return requiredTask;
};
exports.update = update;
const remove = (taskId) => {
    const index = tasks.findIndex((task) => task.id === taskId);
    if (index > -1) {
        tasks.splice(index, 1);
    }
};
exports.remove = remove;
