"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.get = exports.save = exports.getAll = void 0;
const boardsRepo = __importStar(require("./board.memory.repository"));
const board_model_1 = __importDefault(require("./board.model"));
const getAll = () => boardsRepo.getAll();
exports.getAll = getAll;
const save = (board) => boardsRepo.save(new board_model_1.default(board));
exports.save = save;
const get = (boardId) => boardsRepo.get(boardId);
exports.get = get;
const update = (boardId, newBoardData) => boardsRepo.update(boardId, newBoardData);
exports.update = update;
const remove = (boardId) => boardsRepo.remove(boardId);
exports.remove = remove;
