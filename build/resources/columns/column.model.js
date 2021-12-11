"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Column {
    /**
     *
     * @param param0 column data object
     */
    constructor({ id = (0, uuid_1.v4)(), title = 'title', order = 0, } = {}) {
        this.id = id;
        this.title = title;
        this.order = order;
    }
    /**
     * Returns an object containing viewable column data
     * @param column column data object
     * @returns an object containing viewable column data
     */
    static toResponse(column) {
        return column;
    }
}
exports.default = Column;
