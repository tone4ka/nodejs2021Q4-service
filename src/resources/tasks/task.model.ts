import { v4 as uuidv4 } from 'uuid';

class Task {
  id: string | undefined;
  title: string | undefined;
  description: string | undefined;
  userId: string | undefined;
  boardId: string | undefined;
  columnId: string | undefined;
  order: string | undefined;
  constructor({
    id = uuidv4(),
    title = 'title',
    description = 'description',
    userId = 'userId',
    boardId = 'boardId',
    columnId = 'columnId',
    order = '0',
  } = {}) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
    this.order = order;
  }

  static toResponse(task: Task) {
    const { id, title, description, userId, boardId, columnId, order } = task;
    return {
      id,
      title,
      description,
      userId,
      boardId,
      columnId,
      order
    };
  }
}

export default Task;
