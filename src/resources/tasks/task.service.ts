import * as tasksRepo from './task.memory.repository';
import Task from '../tasks/task.entity';

/**
 *Returns an array that contains of the saved Task objects for this board
 * @param boardId string
 * @returns an array that contains of the saved Task objects for this board
 */
const getAll = async (boardId: string): Promise<Task[]> => await tasksRepo.getAll(boardId);

/**
 * Returns an array that contains of the saved Task objects assigned to this user
 * @param userId string
 * @returns an array that contains of the saved Task objects assigned to this user
 */
const getAllusersTasks = async (userId: string) => await tasksRepo.getAllusersTasks(userId);

/**
 * Saves new task in data base
 * @param task task data object
 * @returns Task object
 */
const save = async (task: Task): Promise<Task> => await tasksRepo.save(task);

/**
 * Returns required task from data base
 * @param taskId string
 * @returns required task from data base or undefined if it isn't
 */
const get = async (taskId: string): Promise<Task | void> => await tasksRepo.get(taskId);

/**
 * Updates task in data base with new data
 * @param taskId string
 * @param newTaskData new task data object
 * @returns updated task if it is in database or undefined if it isn't
 */
const update = async (taskId: string, newTaskData: Task): Promise<Task | void> => await tasksRepo.update(taskId, newTaskData);

const updateUserId = async (userId: string, newUserId: string | null): Promise<void> => await tasksRepo.updateUserId(userId, newUserId);
/**
 * Removes a task from the database
 * @param taskId string
 */
const remove = async (task: Task): Promise<void> => await tasksRepo.remove(task);

export { getAll, save, get, update, remove, getAllusersTasks, updateUserId };
