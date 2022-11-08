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
const PublicationRepository_1 = __importDefault(require("../../repositories/Publication/PublicationRepository"));
const ClientRepository_1 = __importDefault(require("../../repositories/Client/ClientRepository"));
class PublicationController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = req;
            const { title, description, data, region, servTypeId } = req.body;
            const client = yield ClientRepository_1.default.findClientById({
                id: Number(userId),
            });
            if ((client === null || client === void 0 ? void 0 : client.typeId) === 1) {
                const publication = yield PublicationRepository_1.default.create({
                    data: {
                        title,
                        description,
                        data: new Date(data),
                        type: "Beginner",
                        region,
                        servTypeId: Number(servTypeId),
                        clientId: Number(userId),
                    },
                });
                return res.json({ publication });
            }
            else {
                const publication = yield PublicationRepository_1.default.create({
                    data: {
                        title,
                        description,
                        data: new Date(data),
                        type: "Queen",
                        region,
                        servTypeId: Number(servTypeId),
                        clientId: Number(userId),
                    },
                });
                return res.json({ publication });
            }
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = req;
            const { id } = req.params;
            const publications = yield PublicationRepository_1.default.read({
                id: Number(id),
                clientId: userId,
            });
            return res.json({ publications });
        });
    }
    readById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = req;
            const { id } = req.params;
            const publication = yield PublicationRepository_1.default.findPublicationById({
                id: Number(id),
                clientId: userId,
            });
            return res.json({ publication });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { userId } = req;
            const { title, description, data, region, servTypeId } = req.body;
            const publication = yield PublicationRepository_1.default.update({
                id: Number(id),
                clientId: userId,
                data: {
                    title,
                    description,
                    data: new Date(data),
                    region,
                    servTypeId: Number(servTypeId),
                },
            });
            return res.json({ publication });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = req;
            const { id } = req.params;
            const publication = yield PublicationRepository_1.default.delete({
                id: Number(id),
                clientId: userId,
            });
            return res.json({ publication });
        });
    }
}
exports.default = new PublicationController();
