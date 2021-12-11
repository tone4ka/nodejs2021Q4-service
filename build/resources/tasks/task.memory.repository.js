"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllusersTasks = exports.remove = exports.update = exports.get = exports.save = exports.getAll = void 0;
const tasks = [];
/**
 *Returns an array that contains of the saved Task objects for this board
 * @param boardId string
 * @returns an array that contains of the saved Task objects for this board
 */
const getAll = (boardId) => tasks.filter((task) => task.boardId === boardId);
exports.getAll = getAll;
/**
 * Returns an array that contains of the saved Task objects assigned to this user
 * @param userId string
 * @returns an array that contains of the saved Task objects assigned to this user
 */
const getAllusersTasks = (userId) => tasks.filter((task) => task.userId === userId);
exports.getAllusersTasks = getAllusersTasks;
/**
 *
 * Saves new task in data base
 * @param task task data object
 * @returns Task object
 */
const save = (data) => {
    const newTask = data;
    tasks.push(newTask);
    return newTask;
};
exports.save = save;
/**
 * Returns required task from data base
 * @param taskId string
 * @returns required task from data base or undefined if it isn't
 */
const get = (taskId) => {
    const requiredTask = tasks.find((task) => task.id === taskId);
    return requiredTask;
};
exports.get = get;
/**
 * Updates task in data base with new data
 * @param taskId string
 * @param newTaskData new task data object
 * @returns updated task if it is in database or undefined if it isn't
 */
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
/**
 * Removes a task from the database
 * @param taskId string
 */
const remove = (taskId) => {
    const index = tasks.findIndex((task) => task.id === taskId);
    if (index > -1) {
        tasks.splice(index, 1);
    }
};
exports.remove = remove;
