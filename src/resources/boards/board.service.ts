import * as boardsRepo from './board.memory.repository';
import Board from './board.model';

const getAll = (): Board[] => boardsRepo.getAll();
const save = (board: Board): Board => boardsRepo.save(new Board(board));
const get = (boardId: string | undefined): Board => boardsRepo.get(boardId) as Board;
const update = (boardId: string | undefined, newBoardData: Board): Board | void => boardsRepo.update(boardId, newBoardData);
const remove = (boardId: string | undefined): void => boardsRepo.remove(boardId);

export { getAll, save, get, update, remove };
