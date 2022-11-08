"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader)
        return res.status(401).json({ message: 'No token provided' });
    const parts = authHeader.split(' ');
    if (parts.length !== 2)
        return res.status(401).json({ message: 'Token error' });
    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme))
        return res.status(401).json({ message: 'Token malformatted' });
    jsonwebtoken_1.default.verify(token, String(process.env.AUTH_SECRET), (err, decoded) => {
        if (err)
            return res.status(401).json({ message: 'Token invalid' });
        req.userId = decoded.id;
        console.log('decoded', decoded);
        return next();
    });
};
exports.authenticateToken = authenticateToken;
