import Board from './board.model';

const boards: Board[] = [];

/**
 * Returns an array that contains of the saved Board objects
 * @returns an array that contains of the saved Board objects
 */
const getAll = (): Board[] => boards;

/**
 * Saves new board in data base
 * @param data board data object
 * @returns board object
 */
const save = (data: Board): Board => {
  const newBoard = new Board(data);
  boards.push(newBoard);
  return newBoard;
};

/**
 * Returns required board from data base
 * @param boardId string
 * @returns required board if it is in database or undefined if it isn't
 */
const get = (boardId: string | undefined): Board | void => {
  const requiredBoard = boards.find((board) => board.id === boardId);
  return requiredBoard;
};

/**
 * Updates board in data base with new data
 * @param boardId string
 * @param newBoardData new board data object
 * @returns updated board if it is in database or undefined if it isn't
 */
const update = (boardId: string | undefined, newBoardData: Board): Board | void => {
  const requiredBoard = boards.find((board) => board.id === boardId);
  if(requiredBoard){
    requiredBoard.id = newBoardData.id;
    requiredBoard.title = newBoardData.title;
    requiredBoard.columns = newBoardData.columns;
  }
  return requiredBoard;
};

/**
 * Removes a board from the database
 * @param boardId string
 */
const remove = (boardId: string | undefined): void => {
  const index = boards.findIndex((board) => board.id === boardId);
  if (index > -1) {
    boards.splice(index, 1);
  }
};

export { getAll, save, get, update, remove };
