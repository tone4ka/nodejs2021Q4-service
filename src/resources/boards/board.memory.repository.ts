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
  const newBoardDataArr = Object.keys(new Board(newBoardData));
  for (let i = 0; i < newBoardDataArr.length; i += 1) {
    const key = newBoardDataArr[i];
    requiredBoard[key] = newBoardData[key];
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
