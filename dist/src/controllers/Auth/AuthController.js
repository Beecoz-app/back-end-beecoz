"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const ClientRepository_1 = __importDefault(require("../../repositories/Client/ClientRepository"));
const AutonomousRepository_1 = __importDefault(require("../../repositories/Autonomous/AutonomousRepository"));
const generateToken_1 = require("../../utils/generateToken");
class AuthController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { login, password, type, } = req.body;
            if (type === "Client") {
                const clientExists = yield ClientRepository_1.default.findClientByLogin({ login });
                if (!clientExists) {
                    return res.status(400).json({ message: "Client not found" });
                }
                if (!(yield bcrypt_1.default.compare(password, clientExists.password))) {
                    return res.status(400).json({ message: "Incorrect password" });
                }
                return res
                    .status(200)
                    .json({ user: clientExists, token: (0, generateToken_1.generateToken)('id', clientExists.id), clientType: "Client" });
            }
            else {
                const autonomousExists = yield AutonomousRepository_1.default.findAutonomousByLogin({ login });
                if (!autonomousExists) {
                    return res.status(400).json({ message: "Client not found" });
                }
                if (!(yield bcrypt_1.default.compare(password, autonomousExists.password))) {
                    return res.status(400).json({ message: "Incorrect password" });
                }
                return res
                    .status(200)
                    .json({ user: autonomousExists, token: (0, generateToken_1.generateToken)('id', autonomousExists.id), clientType: "Autonomous" });
            }
        });
    }
}
exports.default = new AuthController();
