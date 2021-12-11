import { v4 as uuidv4 } from 'uuid';

class Task {
  id: string;

  title: string | undefined;

  description: string | undefined;

  userId: string | null | undefined;

  boardId: string | undefined;

  columnId: string | undefined;

  order: number | undefined;

  /**
   * 
   * @param param0 task data object
   */
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

  /**
   * Returns an object containing viewable task data
   * @param task task data object
   * @returns an object containing viewable task data
   */
  static toResponse(task: Task) {
    return task;
  }
}

export default Task;
