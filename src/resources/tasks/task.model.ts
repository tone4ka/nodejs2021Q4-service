import { v4 as uuidv4 } from 'uuid';

class Task {
  id: string;

  title: string | undefined;

  description: string | undefined;

  userId: string | null | undefined;

  boardId: string | undefined;

  columnId: string | undefined;

  order: number | undefined;

  constructor({
    id = uuidv4(),
    title = 'title',
    description = 'description',
    userId = null,
    boardId = 'boardId',
    columnId = 'columnId',
    order = 0,
  } = {} as Task) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
    this.order = order;
  }

  static toResponse(task: Task) {
    return task;
  }
}

export default Task;
