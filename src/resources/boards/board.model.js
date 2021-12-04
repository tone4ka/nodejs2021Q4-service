const { v4: uuidv4 } = require('uuid');
const Column = require('../columns/column.model')

class Board {
  constructor({
    id = uuidv4(),
    title = 'title',
    columns = []
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((column) => new Column(column));
  }

  static toResponse(board) {
    const {
      id,
      title,
      columns
    } = board;
    return {
      id,
      title,
      columns
    };
  }
}

module.exports = Board;
