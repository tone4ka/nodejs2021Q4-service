const { v4: uuidv4 } = require('uuid');

class Column {
  constructor({
    id = uuidv4(),
    title = 'title',
    order = 0,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

  static toResponse(task) {
    const { id, title, order } = task;
    return {
      id,
      title,
      order
    };
  }
}

module.exports = Column;
