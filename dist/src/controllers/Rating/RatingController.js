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
const RatingRepository_1 = __importDefault(require("../../repositories/Rating/RatingRepository"));
class RatingController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { stars, comment } = req.body;
            const rating = yield RatingRepository_1.default.create({ data: { stars, comment } });
            return res.json({ rating });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { stars, comment } = req.body;
            const parsedId = Number(id);
            const rating = yield RatingRepository_1.default.update({ id: parsedId, data: { stars, comment } });
            return res.json({ rating });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const parsedId = Number(id);
            const rating = yield RatingRepository_1.default.delete({ id: parsedId });
            return res.json({ rating });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const rating = yield RatingRepository_1.default.read();
            return res.json({ rating });
        });
    }
    readById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const parsedId = Number(id);
            const rating = yield RatingRepository_1.default.findRatingById({ id: parsedId });
            return res.json({ rating });
        });
    }
}
exports.default = new RatingController();
