import Task from './task.model';

const tasks: Task[] = [];

/**
 *Returns an array that contains of the saved Task objects for this board
 * @param boardId string
 * @returns an array that contains of the saved Task objects for this board
 */
const getAll = (boardId: string | undefined): Task[] => tasks.filter((task) => task.boardId === boardId);

/**
 * Returns an array that contains of the saved Task objects assigned to this user
 * @param userId string
 * @returns an array that contains of the saved Task objects assigned to this user
 */
const getAllusersTasks = (userId: string | undefined): Task[] => tasks.filter((task) => task.userId === userId);

/**
 * 
 * Saves new task in data base
 * @param task task data object
 * @returns Task object
 */
const save = (data: Task): Task => {
  const newTask = data as Task;
  tasks.push(newTask);
  return newTask as Task;
};

/**
 * Returns required task from data base
 * @param taskId string
 * @returns required task from data base or undefined if it isn't
 */
const get = (taskId: string | undefined): Task | void => {
  const requiredTask = tasks.find((task) => task.id === taskId);
  return requiredTask;
};

/**
 * Updates task in data base with new data
 * @param taskId string
 * @param newTaskData new task data object
 * @returns updated task if it is in database or undefined if it isn't
 */
const update = (taskId: string | undefined, newTaskData: Task): Task | void => {
  const requiredTask = tasks.find((task) => task.id === taskId);
  if(requiredTask){
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

/**
 * Removes a task from the database
 * @param taskId string
 */
const remove = (taskId: string | undefined): void => {
  const index = tasks.findIndex((task) => task.id === taskId);
  if (index > -1) {
    tasks.splice(index, 1);
  }
};

export { getAll, save, get, update, remove, getAllusersTasks };
