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
const WorkRepository_1 = __importDefault(require("../../repositories/Work/WorkRepository"));
class WorkController {
    open(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idInterest } = req.params;
            const work = yield WorkRepository_1.default.open({ interestId: Number(idInterest) });
            return res.json({ work });
        });
    }
    finish(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, autonomousId } = req.params;
            const { stars, comment } = req.body;
            const isCompletedWork = yield WorkRepository_1.default.findWorkById({ id: Number(id) });
            if ((isCompletedWork === null || isCompletedWork === void 0 ? void 0 : isCompletedWork.status) === 'Completed')
                return res.status(401).json({ message: 'Work already complete' });
            const work = yield WorkRepository_1.default.finish({ id: Number(id), ratingData: { stars, comment }, autonomousId: Number(autonomousId) });
            return res.json({ work });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const parsedId = Number(id);
            const work = yield WorkRepository_1.default.delete({ id: parsedId });
            return res.json({ work });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const work = yield WorkRepository_1.default.read();
            return res.json({ work });
        });
    }
    readById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const parsedId = Number(id);
            const work = yield WorkRepository_1.default.findWorkById({ id: parsedId });
            return res.json({ work });
        });
    }
}
exports.default = new WorkController();
