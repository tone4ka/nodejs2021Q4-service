import Board from './board.model';

const boards: Board[] = [];

const getAll = (): Board[] => boards;

const save = (data: Board): Board => {
  const newBoard = new Board(data);
  boards.push(newBoard);
  return newBoard;
};

const get = (boardId: string | undefined): Board | void => {
  const requiredBoard = boards.find((board) => board.id === boardId);
  return requiredBoard;
};

const update = (boardId: string | undefined, newBoardData: Board): Board | void => {
  const requiredBoard = boards.find((board) => board.id === boardId);
  if(requiredBoard){
    requiredBoard.id = newBoardData.id;
    requiredBoard.title = newBoardData.title;
    requiredBoard.columns = newBoardData.columns;
  }
  return requiredBoard;
};

const remove = (boardId: string | undefined): void => {
  const index = boards.findIndex((board) => board.id === boardId);
  if (index > -1) {
    boards.splice(index, 1);
  }
};

export { getAll, save, get, update, remove };
