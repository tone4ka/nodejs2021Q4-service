"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class User {
    /**
     *
     * @param param0 user data object
     */
    constructor({ id = (0, uuid_1.v4)(), name = 'USER', login = 'user', password = 'P@55w0rd' } = {}) {
        this.id = id;
        this.name = name;
        this.login = login;
        this.password = password;
    }
    /**
     * Returns an object containing viewable user data
     * @param user user data object
     * @returns an object containing viewable user data
     */
    static toResponse(user) {
        const { id, name, login } = user;
        return { id, name, login };
    }
}
exports.default = User;
