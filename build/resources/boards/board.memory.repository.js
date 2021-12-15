"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.get = exports.save = exports.getAll = void 0;
const board_model_1 = __importDefault(require("./board.model"));
const boards = [];
/**
 * Returns an array that contains of the saved Board objects
 * @returns an array that contains of the saved Board objects
 */
const getAll = () => boards;
exports.getAll = getAll;
/**
 * Saves new board in data base
 * @param data board data object
 * @returns board object
 */
const save = (data) => {
    const newBoard = new board_model_1.default(data);
    boards.push(newBoard);
    return newBoard;
};
exports.save = save;
/**
 * Returns required board from data base
 * @param boardId string
 * @returns required board if it is in database or undefined if it isn't
 */
const get = (boardId) => {
    const requiredBoard = boards.find((board) => board.id === boardId);
    return requiredBoard;
};
exports.get = get;
/**
 * Updates board in data base with new data
 * @param boardId string
 * @param newBoardData new board data object
 * @returns updated board if it is in database or undefined if it isn't
 */
const update = (boardId, newBoardData) => {
    const requiredBoard = boards.find((board) => board.id === boardId);
    if (requiredBoard) {
        requiredBoard.id = newBoardData.id;
        requiredBoard.title = newBoardData.title;
        requiredBoard.columns = newBoardData.columns;
    }
    return requiredBoard;
};
exports.update = update;
/**
 * Removes a board from the database
 * @param boardId string
 */
const remove = (boardId) => {
    const index = boards.findIndex((board) => board.id === boardId);
    if (index > -1) {
        boards.splice(index, 1);
    }
};
exports.remove = remove;
