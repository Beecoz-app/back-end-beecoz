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
class WorkRepository {
    open({ interestId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const work = yield prisma.work.create({
                data: {
                    interestId,
                    status: "Progress",
                    ratingId: 1,
                },
            });
            return work;
        });
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            const works = yield prisma.work.findMany();
            return works;
        });
    }
    findWorkByStatus({ status, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const type = yield prisma.work.findFirst({
                where: {
                    status,
                },
            });
            const id = Number(type === null || type === void 0 ? void 0 : type.id);
            return id;
        });
    }
    findWorkById({ id, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const workId = yield prisma.work.findUnique({
                where: {
                    id,
                },
            });
            return workId;
        });
    }
    finish({ id, ratingData: { stars, comment }, autonomousId, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const newWork = yield prisma.work.update({
                where: {
                    id,
                },
                data: {
                    status: "Completed",
                    ratingId: stars,
                },
            });
            const workCountByAutonomousId = yield prisma.work.aggregate({
                where: {
                    interest: {
                        autonomousId,
                    },
                },
                _count: true,
            });
            if (workCountByAutonomousId._count >= 10) {
                console.log("vc tem trabalhos finzalizdos mais de 10 ");
                const averageToUpateAutonomous = yield prisma.work.aggregate({
                    _avg: {
                        ratingId: true,
                    },
                    where: {
                        interest: {
                            autonomousId,
                        },
                    },
                });
                if (Number(averageToUpateAutonomous._avg.ratingId) >= 3 &&
                    Number(averageToUpateAutonomous._avg.ratingId) < 4) {
                    yield prisma.autonomous.update({
                        data: {
                            typeId: 2,
                        },
                        where: {
                            id: autonomousId,
                        },
                    });
                }
                if (workCountByAutonomousId._count >= 20 && Number(averageToUpateAutonomous._avg.ratingId) >= 4) {
                    yield prisma.autonomous.update({
                        data: {
                            typeId: 3,
                        },
                        where: {
                            id: autonomousId,
                        },
                    });
                }
            }
            return newWork;
        });
    }
    delete({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedWork = yield prisma.work.delete({
                where: {
                    id,
                },
            });
            return deletedWork;
        });
    }
}
exports.default = new WorkRepository();
