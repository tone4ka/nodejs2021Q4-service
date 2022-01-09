import * as boardsRepo from './board.memory.repository';
import Board from './board.model';

/**
 * Returns an array that contains of the saved Board objects
 * @returns an array that contains of the saved Board objects
 */
const getAll = (): Board[] => boardsRepo.getAll();

/**
 * Saves new board in data base
 * @param board board data object
 * @returns board object
 */
const save = (board: Board): Board => boardsRepo.save(new Board(board));

/**
 * Returns required board from data base
 * @param boardId string
 * @returns required board if it is in database or undefined if it isn't
 */
const get = (boardId: string): Board => boardsRepo.get(boardId) as Board;

/**
 * Updates board in data base with new data
 * @param boardId string
 * @param newBoardData new board data object
 * @returns updated board if it is in database or undefined if it isn't
 */
const update = (boardId: string, newBoardData: Board): Board | void => boardsRepo.update(boardId, newBoardData);

/**
 * Removes a board from the database
 * @param boardId string
 */
const remove = (boardId: string): void => boardsRepo.remove(boardId);

export { getAll, save, get, update, remove };
