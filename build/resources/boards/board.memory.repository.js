"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.get = exports.save = exports.getAll = void 0;
const board_model_1 = __importDefault(require("./board.model"));
const boards = [];
const getAll = () => boards;
exports.getAll = getAll;
const save = (data) => {
    const newBoard = new board_model_1.default(data);
    boards.push(newBoard);
    return newBoard;
};
exports.save = save;
const get = (boardId) => {
    const requiredBoard = boards.find((board) => board.id === boardId);
    return requiredBoard;
};
exports.get = get;
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
const remove = (boardId) => {
    const index = boards.findIndex((board) => board.id === boardId);
    if (index > -1) {
        boards.splice(index, 1);
    }
};
exports.remove = remove;
