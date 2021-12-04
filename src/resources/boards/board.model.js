const { v4: uuidv4 } = require('uuid');

class Board {
  constructor({
    id = uuidv4(),
    title = 'title',
    // columns = []
  } = {}) {
    this.id = id;
    this.title = title;
    // this.columns = ???????;
  }

  static toResponse(board) {
    const {
      id,
      title,
      // columns
    } = board;
    return {
      id,
      title,
      // columns
    };
  }
}

module.exports = Board;
