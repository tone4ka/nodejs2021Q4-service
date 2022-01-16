import {getRepository} from "typeorm";
import Board from "./board.entity";
// import BoardColumn from "../columns/column.entity";

/**
 * Returns an array that contains of the saved Board objects
 * @returns an array that contains of the saved Board objects
 */
const getAll = async (): Promise<Board[] | void> => {
  const boardRepository = getRepository(Board);
  const boards = await boardRepository.find();
  // const boards = await getRepository(Board)
  //       .createQueryBuilder('board')
  //       .leftJoinAndSelect('board.columns', "column")
  //       .getMany();
  return boards;
};

/**
 * Saves new board in data base
 * @param data board data object
 * @returns board object
 */
const save = async (data: Board): Promise<Board> => {
  const boardRepository = getRepository(Board);
  // const columnRepository = getRepository(BoardColumn);
  // console.log(data.columns)
  // const columnsEntity = data.columns.map((column) => columnRepository.create(column))
  // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1')
  // console.log(columnsEntity)
  // const dataWithColumnsEntities = {...data}
  // dataWithColumnsEntities.columns = columnsEntity
  const board = boardRepository.create(data);
  await boardRepository.save(board);
  return board;
};

/**
 * Returns required board from data base
 * @param boardId string
 * @returns required board if it is in database or undefined if it isn't
 */
const get = async (boardId: string): Promise<Board | void> => {
  const boardRepository = getRepository(Board)
  const board = await boardRepository.findOne(boardId/* , { relations: ["columns"] } */)
  return board;
};

/**
 * Updates board in data base with new data
 * @param boardId string
 * @param newBoardData new board data object
 * @returns updated board if it is in database or undefined if it isn't
 */
const update = async (boardId: string, newBoardData: Board): Promise<Board | void> => {
  const boardRepository = getRepository(Board);
    const updatedBoard = await boardRepository.update(boardId, newBoardData);
    return updatedBoard.raw;

};

/**
 * Removes a board from the database
 * @param boardId string
 */
const remove = async (boardId: string): Promise<void> => {
  const boardRepository = getRepository(Board);
  await boardRepository.delete(boardId);
};

export { getAll, save, get, update, remove };
