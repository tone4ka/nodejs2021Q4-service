import Task from './task.model';

const tasks: Task[] = [];

const getAll = (boardId: string | undefined): Task[] => tasks.filter((task) => task.boardId === boardId);

const getAllusersTasks = (userId: string | undefined): Task[] => tasks.filter((task) => task.userId === userId);

const save = (data: Task): Task => {
  const newTask = data as Task;
  tasks.push(newTask);
  return newTask as Task;
};

const get = (taskId: string | undefined): Task | void => {
  const requiredTask = tasks.find((task) => task.id === taskId);
  return requiredTask;
};

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

const remove = (taskId: string | undefined): void => {
  const index = tasks.findIndex((task) => task.id === taskId);
  if (index > -1) {
    tasks.splice(index, 1);
  }
};

export { getAll, save, get, update, remove, getAllusersTasks };
