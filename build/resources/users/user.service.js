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
const usersRepo = __importStar(require("./user.memory.repository"));
const user_model_1 = __importDefault(require("./user.model"));
/**
 * Returns an array that contains of the saved User objects
 * @returns an array that contains of the saved User objects
 */
const getAll = () => usersRepo.getAll();
exports.getAll = getAll;
/**
 * Saves new user in data base
 * @param user user data object
 * @returns User object
 */
const save = (user) => usersRepo.save(new user_model_1.default(user));
exports.save = save;
/**
 * Returns required user from data base
 * @param userId string
 * @returns required user if it is in database or undefined if it isn't
 */
const get = (userId) => usersRepo.get(userId);
exports.get = get;
/**
 * Updates user in data base with new data
 * @param userId string
 * @param newUserData new user data object
 * @returns updated user if it is in database or undefined if it isn't
 */
const update = (userId, newUserData) => usersRepo.update(userId, newUserData);
exports.update = update;
/**
 * Removes a user from the database
 * @param userId string
 */
const remove = (userId) => usersRepo.remove(userId);
exports.remove = remove;
