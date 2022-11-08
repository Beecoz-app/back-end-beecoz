"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (payload, value) => {
    const token = jsonwebtoken_1.default.sign({ [payload]: value }, String(process.env.AUTH_SECRET), {
        expiresIn: 86400,
    });
    return token;
};
exports.generateToken = generateToken;
