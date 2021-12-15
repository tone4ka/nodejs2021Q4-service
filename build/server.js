"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./common/config"));
const fastifyApp_1 = __importDefault(require("./fastifyApp"));
const { PORT } = config_1.default;
/**
 *
 * @param port first term string or number
 */
const start = async (port) => {
    try {
        await fastifyApp_1.default.listen(port);
        console.log(`App is running on http://localhost:${port}`);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};
start(PORT || 3000);
