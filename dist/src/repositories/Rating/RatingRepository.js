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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class RatingRepository {
    findRatingById({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const ratingId = yield prisma.rating.findUnique({
                where: {
                    id,
                }
            });
            return ratingId;
        });
    }
    create({ data }) {
        return __awaiter(this, void 0, void 0, function* () {
            const rating = yield prisma.rating.create({
                data: Object.assign({}, data)
            });
            return rating;
        });
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            const ratings = yield prisma.rating.findMany();
            return ratings;
        });
    }
    update({ id, data }) {
        return __awaiter(this, void 0, void 0, function* () {
            const newRating = yield prisma.rating.update({
                where: {
                    id
                },
                data: Object.assign({}, data)
            });
            return newRating;
        });
    }
    delete({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedRating = yield prisma.rating.delete({
                where: {
                    id
                }
            });
            return deletedRating;
        });
    }
}
exports.default = new RatingRepository();
