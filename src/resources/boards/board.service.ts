import * as boardsRepo from './board.memory.repository';
import Board from '../boards/board.entity';

/**
 * Returns an array that contains of the saved Board objects
 * @returns an array that contains of the saved Board objects
 */
const getAll = (): Promise<Board[] | void> => boardsRepo.getAll();

/**
 * Saves new board in data base
 * @param board board data object
 * @returns board object
 */
const save = (board: Board): Promise<Board> => boardsRepo.save(board);

/**
 * Returns required board from data base
 * @param boardId string
 * @returns required board if it is in database or undefined if it isn't
 */
const get = (boardId: string): Promise<Board | void> => boardsRepo.get(boardId);

/**
 * Updates board in data base with new data
 * @param boardId string
 * @param newBoardData new board data object
 * @returns updated board if it is in database or undefined if it isn't
 */
const update = (boardId: string, newBoardData: Board): Promise<Board | void> => boardsRepo.update(boardId, newBoardData);

/**
 * Removes a board from the database
 * @param boardId string
 */
const remove = (boardId: string):  Promise<void> => boardsRepo.remove(boardId);

export { getAll, save, get, update, remove };
