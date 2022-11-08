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
const ServiceRepository_1 = __importDefault(require("../../repositories/Service/ServiceRepository"));
class ServiceController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idAutonomous, idServiceType } = req.params;
            const service = yield ServiceRepository_1.default.create({ serviceTypeId: Number(idServiceType), autonomousId: Number(idAutonomous) });
            return res.json({ service });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const parsedId = Number(id);
            const service = yield ServiceRepository_1.default.delete({ id: parsedId });
            return res.json({ service });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = yield ServiceRepository_1.default.read();
            return res.json({ service });
        });
    }
    readById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const parsedId = Number(id);
            const service = yield ServiceRepository_1.default.findServiceById({ id: parsedId });
            return res.json({ service });
        });
    }
}
exports.default = new ServiceController();
