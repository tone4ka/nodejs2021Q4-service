import { v4 as uuidv4 } from 'uuid';
import Column from '../columns/column.model';

class Board {
  id: string;

  title: string | undefined;

  columns: Column[];

  /**
   * 
   * @param param0 board data object
   */
  constructor({
    id = uuidv4(),
    title = 'title',
    columns = [new Column()]
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((column) => new Column(column));
  }

  /**
   * Returns an object containing viewable board data
   * @param board board data object
   * @returns an object containing viewable board data
   */
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
