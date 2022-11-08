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
const InterestRepository_1 = __importDefault(require("../../repositories/Interest/InterestRepository"));
class InterestController {
    join(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idAutonomous, idPublication } = req.params;
            const interestExists = yield InterestRepository_1.default.readByAutonomous(Number(idPublication), Number(idAutonomous));
            if (interestExists.length > 0)
                return res.status(400).json('Autonomous already join on this interest!');
            const interest = yield InterestRepository_1.default.create({ data: { publicationId: Number(idPublication), autonomousId: Number(idAutonomous) } });
            return res.json({ interest });
        });
    }
    exit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idAutonomous, idPublication, idInterest } = req.params;
            const interestExists = yield InterestRepository_1.default.readByAutonomous(Number(idPublication), Number(idAutonomous));
            if (!(interestExists.length > 0))
                return res.status(400).json('Autonomous not enter ');
            const interest = yield InterestRepository_1.default.delete({ id: Number(idInterest) });
            return res.json({ interest });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const interest = yield InterestRepository_1.default.read();
            return res.json({ interest });
        });
    }
    readById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const parsedId = Number(id);
            const interest = yield InterestRepository_1.default.findInterestById({ id: parsedId });
            return res.json({ interest });
        });
    }
}
exports.default = new InterestController();
