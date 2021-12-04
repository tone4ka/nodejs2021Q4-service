const boardsRepo = require('./board.memory.repository');
const Board = require('./board.model')

const getAll = () => boardsRepo.getAll();
const save = (board) => boardsRepo.save(new Board(board));
const get = (boardId) => boardsRepo.get(boardId);
const update = (boardId, newBoardData) => boardsRepo.update(boardId, newBoardData);
const remove = (boardId) => boardsRepo.remove(boardId);

module.exports = { getAll, save, get, update, remove };
