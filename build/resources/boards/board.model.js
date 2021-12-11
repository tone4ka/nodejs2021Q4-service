"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const column_model_1 = __importDefault(require("../columns/column.model"));
class Board {
    /**
     *
     * @param param0 board data object
     */
    constructor({ id = (0, uuid_1.v4)(), title = 'title', columns = [new column_model_1.default()] } = {}) {
        this.id = id;
        this.title = title;
        this.columns = columns.map((column) => new column_model_1.default(column));
    }
    /**
     * Returns an object containing viewable board data
     * @param board board data object
     * @returns an object containing viewable board data
     */
    static toResponse(board) {
        const { id, title, columns } = board;
        return {
            id,
            title,
            columns
        };
    }
}
exports.default = Board;
