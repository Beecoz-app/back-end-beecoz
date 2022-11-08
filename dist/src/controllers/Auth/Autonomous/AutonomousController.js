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
const AutonomousRepository_1 = __importDefault(require("../../../repositories/Autonomous/AutonomousRepository"));
const TypeUserRepository_1 = __importDefault(require("../../../repositories/TypeUser/TypeUserRepository"));
const AutonomousProfileRepository_1 = __importDefault(require("../../../repositories/Autonomous/AutonomousProfile/AutonomousProfileRepository"));
const hashPassword_1 = require("../../../utils/hashPassword");
const generateToken_1 = require("../../../utils/generateToken");
const PublicationRepository_1 = __importDefault(require("../../../repositories/Publication/PublicationRepository"));
class AuthAutonomousController {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, login, password, lastName, gender, cpf, biography, bornDate, cnpj, servTypeId, } = req.body;
            const typeId = yield TypeUserRepository_1.default.findByLevel({
                level: gender === "Female" ? "Queen" : "Beginner",
            });
            const profileId = yield AutonomousProfileRepository_1.default.create({
                data: { biography },
            });
            const autonomous = yield AutonomousRepository_1.default.create({
                data: {
                    autonomousData: {
                        name,
                        lastName,
                        bornDate: new Date(bornDate),
                        cpf,
                        gender,
                        typeId,
                        cnpj,
                        profileId: profileId.id,
                        login,
                        password: yield (0, hashPassword_1.hashPassword)(password),
                    },
                    serviceData: Number(servTypeId),
                },
            });
            return res.json({ autonomous, token: (0, generateToken_1.generateToken)("id", autonomous.id) });
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const autonomous = yield AutonomousRepository_1.default.read();
            return res.json(autonomous);
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const autonomous = yield AutonomousRepository_1.default.findAutonomousById({
                id: Number(id),
            });
            return res.json(autonomous);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { name, login, password, lastName, servTypeId, biography, } = req.body;
            const autonomousExists = yield AutonomousRepository_1.default.findAutonomousById({
                id: Number(id),
            });
            if (!autonomousExists) {
                return res.status(400).json({ message: "Autonomous not found" });
            }
            const autonomous = yield AutonomousRepository_1.default.update({
                id: Number(id),
                data: {
                    autonomousData: {
                        name,
                        lastName,
                        login,
                        password: yield (0, hashPassword_1.hashPassword)(password),
                    },
                    serviceData: Number(servTypeId),
                    profileData: {
                        biography,
                    },
                },
            });
            return res.json({ autonomous });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(id);
            const clientExists = yield AutonomousRepository_1.default.findAutonomousById({
                id: Number(id),
            });
            if (!clientExists) {
                return res.status(400).json({ message: "Client not found" });
            }
            yield AutonomousRepository_1.default.delete({ id: Number(id) });
            return res.status(200).json({ message: "Autonomous deleted successfully" });
        });
    }
    changePassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { oldPassword, newPassword, } = req.body;
            const autonomousExists = yield AutonomousRepository_1.default.findAutonomousById({
                id: Number(id),
            });
            if (!autonomousExists) {
                return res.status(400).json({ message: "Autonomous not found" });
            }
            if (!(yield bcrypt_1.default.compare(oldPassword, autonomousExists.password))) {
                return res.status(400).json({ message: "Password does not match" });
            }
            const password = yield AutonomousRepository_1.default.updatePassword({
                id: Number(id),
                password: yield (0, hashPassword_1.hashPassword)(newPassword),
            });
            return res.status(200).json({ password });
        });
    }
    getPublications(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = request;
            const autonomous = yield AutonomousRepository_1.default.findAutonomousById({ id: Number(userId) });
            if (!autonomous)
                return response.status(400).json({ message: 'Autonomous not exists' });
            const typeAutonomous = yield TypeUserRepository_1.default.returnLevel(autonomous === null || autonomous === void 0 ? void 0 : autonomous.typeId);
            if (String(typeAutonomous === null || typeAutonomous === void 0 ? void 0 : typeAutonomous.level) === 'Beginner') {
                const publications = yield PublicationRepository_1.default.findAllPublicationOnlyBegginerAutonomous({ servTypeId: Number(autonomous.service[0].servTypeId) });
                return response.json(publications);
            }
            else {
                console.log('aaaaaaaaaaaa');
                const publications = yield PublicationRepository_1.default.findAllPublicationOnlyQueenOrIntermediateAutonomous({ servTypeId: Number(autonomous.service[0].servTypeId) });
                return response.json(publications);
            }
        });
    }
}
exports.default = new AuthAutonomousController();
