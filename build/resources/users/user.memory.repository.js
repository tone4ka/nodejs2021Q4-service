"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.get = exports.save = exports.getAll = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const users = [];
const getAll = () => users;
exports.getAll = getAll;
const save = (data) => {
    const newUser = new user_model_1.default(data);
    users.push(newUser);
    return newUser;
};
exports.save = save;
const get = (userId) => {
    const requiredUser = users.find((user) => user.id === userId);
    return requiredUser;
};
exports.get = get;
const update = (userId, newUserData) => {
    const requiredUser = users.find((user) => user.id === userId);
    if (requiredUser) {
        requiredUser.id = newUserData.id;
        requiredUser.name = newUserData.name;
        requiredUser.login = newUserData.login;
        requiredUser.password = newUserData.password;
    }
    return requiredUser;
};
exports.update = update;
const remove = (userId) => {
    const index = users.findIndex((user) => user.id === userId);
    if (index > -1) {
        users.splice(index, 1);
    }
};
exports.remove = remove;
