import * as tasksRepo from './task.memory.repository';
import Task from './task.model';

const getAll = (boardId: string | undefined): Task[] => tasksRepo.getAll(boardId);
const getAllusersTasks = (userId: string) => tasksRepo.getAllusersTasks(userId);
const save = (task: Task): Task => tasksRepo.save(new Task(task));
const get = (taskId: string | undefined): Task | void => tasksRepo.get(taskId);
const update = (taskId: string, newTaskData: Task): Task | void => tasksRepo.update(taskId, newTaskData);
const remove = (taskId: string | undefined): void => tasksRepo.remove(taskId);

export { getAll, save, get, update, remove, getAllusersTasks };

