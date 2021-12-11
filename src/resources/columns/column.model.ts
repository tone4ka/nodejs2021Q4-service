import { v4 as uuidv4 } from 'uuid';

class Column {
  id: string;

  title: string;

  order: number;

  /**
   * 
   * @param param0 column data object
   */
  constructor({
    id = uuidv4(),
    title = 'title',
    order = 0,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

  /**
   * Returns an object containing viewable column data
   * @param column column data object
   * @returns an object containing viewable column data
   */
  static toResponse(column: Column) {
    return column;
  }
}

export default Column;
