import * as tasksRepo from './task.memory.repository';
import Task from './task.model';

/**
 *Returns an array that contains of the saved Task objects for this board
 * @param boardId string
 * @returns an array that contains of the saved Task objects for this board
 */
const getAll = (boardId: string): Task[] => tasksRepo.getAll(boardId);

/**
 * Returns an array that contains of the saved Task objects assigned to this user
 * @param userId string
 * @returns an array that contains of the saved Task objects assigned to this user
 */
const getAllusersTasks = (userId: string) => tasksRepo.getAllusersTasks(userId);

/**
 * Saves new task in data base
 * @param task task data object
 * @returns Task object
 */
const save = (task: Task): Task => tasksRepo.save(new Task(task));

/**
 * Returns required task from data base
 * @param taskId string
 * @returns required task from data base or undefined if it isn't
 */
const get = (taskId: string): Task | void => tasksRepo.get(taskId);

/**
 * Updates task in data base with new data
 * @param taskId string
 * @param newTaskData new task data object
 * @returns updated task if it is in database or undefined if it isn't
 */
const update = (taskId: string, newTaskData: Task): Task | void => tasksRepo.update(taskId, newTaskData);

/**
 * Removes a task from the database
 * @param taskId string
 */
const remove = (taskId: string): void => tasksRepo.remove(taskId);

export { getAll, save, get, update, remove, getAllusersTasks };
