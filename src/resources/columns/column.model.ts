import { v4 as uuidv4 } from 'uuid';

class Column {
  id: string;
  title: string;
  order: number;
  constructor({
    id = uuidv4(),
    title = 'title',
    order = 0,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

  static toResponse(column: Column) {
    return column;
  }
}

export default Column;
