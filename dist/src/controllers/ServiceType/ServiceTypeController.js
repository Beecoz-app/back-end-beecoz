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
const ServiceTypeRepository_1 = __importDefault(require("../../repositories/ServiceType/ServiceTypeRepository"));
class ServiceTypeController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = req.body;
            const serviceType = yield ServiceTypeRepository_1.default.create({ data: { name } });
            return res.json({ serviceType });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const serviceType = yield ServiceTypeRepository_1.default.read();
            return res.json({ serviceType });
        });
    }
    readById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const serviceType = yield ServiceTypeRepository_1.default.findServiceTypeById({
                id: Number(id),
            });
            return res.json({ serviceType });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { name } = req.body;
            const serviceType = yield ServiceTypeRepository_1.default.update({
                id: Number(id),
                data: { name },
            });
            return res.json({ serviceType });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const serviceType = yield ServiceTypeRepository_1.default.delete({ id: Number(id) });
            return res.json({ serviceType });
        });
    }
}
exports.default = new ServiceTypeController();
