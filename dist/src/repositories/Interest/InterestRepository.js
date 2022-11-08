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
class InterestRepository {
    findInterestById({ id, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const interestId = yield prisma.interest.findUnique({
                where: {
                    id,
                },
                include: {
                    autonomous: {
                        select: {
                            id: true,
                        },
                    },
                },
            });
            return interestId;
        });
    }
    create({ data }) {
        return __awaiter(this, void 0, void 0, function* () {
            const interest = yield prisma.interest.create({
                data: Object.assign({}, data),
            });
            return interest;
        });
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            const interests = yield prisma.interest.findMany();
            return interests;
        });
    }
    readByPublication({ publicationId, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const interest = yield prisma.interest.findMany({
                where: {
                    publicationId,
                },
                include: {
                    autonomous: {
                        select: {
                            id: true,
                        },
                    },
                },
            });
            return interest;
        });
    }
    readByAutonomous(publicationId, autonomousId) {
        return __awaiter(this, void 0, void 0, function* () {
            const interest = yield prisma.interest.findMany({
                where: {
                    publicationId,
                    autonomousId
                }
            });
            return interest;
        });
    }
    update({ id, data }) {
        return __awaiter(this, void 0, void 0, function* () {
            const newInterest = yield prisma.interest.update({
                where: {
                    id,
                },
                data: Object.assign({}, data),
            });
            return newInterest;
        });
    }
    delete({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedInterest = yield prisma.interest.delete({
                where: {
                    id,
                },
            });
            return deletedInterest;
        });
    }
}
exports.default = new InterestRepository();
