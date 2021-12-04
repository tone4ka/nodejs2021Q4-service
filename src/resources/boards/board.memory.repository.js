const Board = require('./board.model');

const boards = [];

const getAll = async () => boards;

const save = async (data) => {
  const newBoard = new Board(data);
  boards.push(newBoard);
  return newBoard;
};

const get = async (boardId) => {
  const requiredBoard = boards.find((board) => board.id === boardId);
  return requiredBoard;
};

const update = async (boardId, newBoardData) => {
  const requiredBoard = boards.find((board) => board.id === boardId);
  const newBoardDataArr = Object.keys(newBoardData);
  for (let i = 0; i < newBoardDataArr.length; i += 1) {
    const key = newBoardDataArr[i];
    requiredBoard[key] = newBoardData[key];
  }
  return requiredBoard;
};

const remove = async (boardId) => {
  const index = boards.findIndex((board) => board.id === boardId);
  if (index > -1) {
    boards.splice(index, 1);
  }
};

module.exports = { getAll, save, get, update, remove };
