import { v4 as uuidv4 } from 'uuid';
import Column from '../columns/column.model';

class Board {
  id: string | undefined;
  title: string | undefined;
  columns: Column[];
  constructor({
    id = uuidv4(),
    title = 'title',
    columns = [new Column()]
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((column) => new Column(column));
  }

  static toResponse(board: Board) {
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

export default Board;
