"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllusersTasks = exports.remove = exports.update = exports.get = exports.save = exports.getAll = void 0;
const tasksRepo = __importStar(require("./task.memory.repository"));
const task_model_1 = __importDefault(require("./task.model"));
/**
 *Returns an array that contains of the saved Task objects for this board
 * @param boardId string
 * @returns an array that contains of the saved Task objects for this board
 */
const getAll = (boardId) => tasksRepo.getAll(boardId);
exports.getAll = getAll;
/**
 * Returns an array that contains of the saved Task objects assigned to this user
 * @param userId string
 * @returns an array that contains of the saved Task objects assigned to this user
 */
const getAllusersTasks = (userId) => tasksRepo.getAllusersTasks(userId);
exports.getAllusersTasks = getAllusersTasks;
/**
 * Saves new task in data base
 * @param task task data object
 * @returns Task object
 */
const save = (task) => tasksRepo.save(new task_model_1.default(task));
exports.save = save;
/**
 * Returns required task from data base
 * @param taskId string
 * @returns required task from data base or undefined if it isn't
 */
const get = (taskId) => tasksRepo.get(taskId);
exports.get = get;
/**
 * Updates task in data base with new data
 * @param taskId string
 * @param newTaskData new task data object
 * @returns updated task if it is in database or undefined if it isn't
 */
const update = (taskId, newTaskData) => tasksRepo.update(taskId, newTaskData);
exports.update = update;
/**
 * Removes a task from the database
 * @param taskId string
 */
const remove = (taskId) => tasksRepo.remove(taskId);
exports.remove = remove;
