"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Task {
    /**
     *
     * @param param0 task data object
     */
    constructor({ id = (0, uuid_1.v4)(), title = 'title', description = 'description', userId = null, boardId = 'boardId', columnId = 'columnId', order = 0, } = {}) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId = columnId;
        this.order = order;
    }
    /**
     * Returns an object containing viewable task data
     * @param task task data object
     * @returns an object containing viewable task data
     */
    static toResponse(task) {
        return task;
    }
}
exports.default = Task;
