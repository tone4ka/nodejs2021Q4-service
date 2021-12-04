const { v4: uuidv4 } = require('uuid');

class Task {
  constructor({
    id = uuidv4(),
    title = 'title',
    description = 'description',
    userId = 'userId',
    boardId = 'boardId',
    // columnId = 'columnId'
  } = {}) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    // this.columnId = columnId;
  }

  static toResponse(task) {
    const {     
      id,
      title,
      description,
      userId,
      boardId,
      // columnId
     } = task;
    return {     
      id,
      title,
      description,
      userId,
      boardId,
      // columnId
     };
  }
}

module.exports = Task;
