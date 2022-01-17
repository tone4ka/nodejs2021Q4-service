import {getRepository} from "typeorm";
import Task from "./task.entity";

/**
 *Returns an array that contains of the saved Task objects for this board
 * @param boardId string
 * @returns an array that contains of the saved Task objects for this board
 */
const getAll =  async (boardId: string | undefined): Promise<Task[]> => {
  const repo = getRepository(Task);
  const tasks = await repo.find({boardId});
  console.log(tasks)
  return tasks;
};

/**
 * Returns an array that contains of the saved Task objects assigned to this user
 * @param userId string
 * @returns an array that contains of the saved Task objects assigned to this user
 */
const getAllusersTasks =  async (userId: string): Promise<Task[] | void> => {
  const repo = getRepository(Task);
  const tasks = await repo.find({userId});
  return tasks;
};

/**
 * 
 * Saves new task in data base
 * @param task task data object
 * @returns Task objects
 */
const save = async (data: Task): Promise<Task> => {
  const repo = getRepository(Task);
  // const task = repo.create(data);
  await repo.save(data);
  return data;
};

/**
 * Returns required task from data base
 * @param taskId string
 * @returns required task from data base or undefined if it isn't
 */
const get = async (taskId: string): Promise<Task | void> => {
  const repo = getRepository(Task)
  const task = await repo.findOne(taskId);
  console.log(task)
  return task;
};

/**
 * Updates task in data base with new data
 * @param taskId string
 * @param newTaskData new task data object
 * @returns updated task if it is in database or undefined if it isn't
 */
const update = async (taskId: string, newTaskData: Task): Promise<Task | void> => {
  const repo = getRepository(Task);
    const updatedTask = await repo.update(taskId, newTaskData);
    return updatedTask.raw;
};

const updateUserId = async (userId: string, newUserId: string | null): Promise<void> => {
  const repo = getRepository(Task);
  await repo.update({userId}, {userId: newUserId});
};

/**
 * Removes a task from the database
 * @param taskId string
 */
const remove = async (task: Task): Promise<void> => {
  const repo = getRepository(Task);
  await repo.remove(task)
};

export { getAll, save, get, update, remove, getAllusersTasks,  updateUserId};
