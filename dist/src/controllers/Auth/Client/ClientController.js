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
const ClientProfileRepository_1 = __importDefault(require("../../../repositories/Client/ClientProfile/ClientProfileRepository"));
const ClientRepository_1 = __importDefault(require("../../../repositories/Client/ClientRepository"));
const TypeUserRepository_1 = __importDefault(require("../../../repositories/TypeUser/TypeUserRepository"));
const hashPassword_1 = require("../../../utils/hashPassword");
const generateToken_1 = require("../../../utils/generateToken");
class ClientController {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, login, password, lastName, gender, bornDate, cpf, biography, } = req.body;
            const profile = yield ClientProfileRepository_1.default.create({
                data: { biography },
            });
            const typeId = yield TypeUserRepository_1.default.findByLevel({
                level: gender === "Female" ? "Queen" : "Beginner",
            });
            const client = yield ClientRepository_1.default.create({
                data: {
                    name,
                    lastName,
                    gender,
                    bornDate: new Date(bornDate),
                    cpf,
                    login,
                    password: yield (0, hashPassword_1.hashPassword)(password),
                    profileId: profile.id,
                    typeId,
                },
            });
            return res.json({ client, token: (0, generateToken_1.generateToken)('id', client.id) });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield ClientRepository_1.default.read();
            return res.json(client);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const parsedId = Number(id);
            const clientExists = yield ClientRepository_1.default.findClientById({
                id: parsedId,
            });
            if (!clientExists) {
                return res.status(400).json({ message: "Client not found" });
            }
            yield ClientRepository_1.default.delete({ id: parsedId });
            return res.status(200).json({ message: "Client deleted successfully" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const parsedId = Number(id);
            const { name, login, password, lastName, } = req.body;
            const clientExists = yield ClientRepository_1.default.findClientById({
                id: parsedId,
            });
            if (!clientExists) {
                return res.status(400).json({ message: "Client not found" });
            }
            const client = yield ClientRepository_1.default.update({
                id: parsedId,
                data: { name, lastName, login, password: yield (0, hashPassword_1.hashPassword)(password) },
            });
            return res.json({ client });
        });
    }
    changePassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { oldPassword, newPassword } = req.body;
            const parsedId = Number(id);
            const clientsExists = yield ClientRepository_1.default.findClientById({
                id: parsedId,
            });
            if (!clientsExists) {
                return res.status(400).json({ message: "Client not found" });
            }
            const passwordMatch = (yield clientsExists.password) === oldPassword;
            if (!passwordMatch) {
                return res.status(400).json({ message: "Password does not match" });
            }
            yield ClientRepository_1.default.updatePassword({
                id: parsedId,
                password: yield (0, hashPassword_1.hashPassword)(newPassword)
            });
            return res.status(200).json({ message: "Password updated" });
        });
    }
}
exports.default = new ClientController();
