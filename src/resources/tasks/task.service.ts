import * as tasksRepo from './task.memory.repository';
import Task from './task.model';

const getAll = (boardId: string | undefined): Task[] => tasksRepo.getAll(boardId);
const getAllusersTasks = (userId: string | undefined) => tasksRepo.getAllusersTasks(userId);
const save = (task: Task): Promise<Task> => tasksRepo.save(new Task(task));
const get = (taskId: string | undefined): Promise<Task | undefined> => tasksRepo.get(taskId);
const update = (taskId: string | undefined, newTaskData: Task): Promise<Task | undefined> => tasksRepo.update(taskId, newTaskData);
const remove = (taskId: string | undefined): Promise<void> => tasksRepo.remove(taskId);

export { getAll, save, get, update, remove, getAllusersTasks };

