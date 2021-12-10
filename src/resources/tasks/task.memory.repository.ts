import Task from './task.model';

const tasks: Task[] = [];

const getAll = (boardId: string | undefined) => tasks.filter((task) => task.boardId === boardId);

const getAllusersTasks = (userId: string | undefined) => tasks.filter((task) => task.userId === userId);

const save = async (data: Task) => {
  const newTask = new Task(data);
  tasks.push(newTask);
  return newTask;
};

const get = async (taskId: string | undefined) => {
  const requiredTask = tasks.find((task) => task.id === taskId);
  return requiredTask;
};

const update = async (taskId: string | undefined, newTaskData: Task) => {
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

const remove = async (taskId: string | undefined) => {
  const index = tasks.findIndex((task) => task.id === taskId);
  if (index > -1) {
    tasks.splice(index, 1);
  }
};

export { getAll, save, get, update, remove, getAllusersTasks };
