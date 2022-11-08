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
class AutonomousRepository {
    create({ data: { autonomousData, serviceData }, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const autonomous = yield prisma.autonomous.create({
                data: {
                    name: autonomousData.name,
                    lastName: autonomousData.lastName,
                    login: autonomousData.login,
                    password: autonomousData.password,
                    gender: autonomousData.gender,
                    bornDate: autonomousData.bornDate,
                    cpf: autonomousData.cpf,
                    cnpj: autonomousData.cnpj,
                    typeId: autonomousData.typeId,
                    profileId: autonomousData.profileId,
                    service: {
                        create: {
                            servTypeId: serviceData,
                        },
                    },
                },
                include: {
                    service: true,
                    profile: true,
                },
            });
            return autonomous;
        });
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            const autonomous = yield prisma.autonomous.findMany({
                include: {
                    profile: true,
                    service: true,
                },
            });
            return autonomous;
        });
    }
    findAutonomousById({ id, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const autonomousId = yield prisma.autonomous.findUnique({
                where: {
                    id,
                },
                include: {
                    profile: true,
                    service: true,
                },
            });
            return autonomousId;
        });
    }
    update({ id, data: { autonomousData, serviceData, profileData }, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const newAutonomous = yield prisma.autonomous.update({
                where: {
                    id,
                },
                data: Object.assign(Object.assign({}, autonomousData), { service: {
                        update: {
                            data: {
                                servTypeId: serviceData,
                            },
                            where: {
                                autonomousId: id,
                            },
                        },
                    }, profile: {
                        update: {
                            biography: profileData.biography,
                        },
                    } }),
                include: {
                    profile: true,
                    service: true,
                },
            });
            return newAutonomous;
        });
    }
    delete({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("repo", id);
            const deletedAutonomous = yield prisma.autonomous.delete({
                where: {
                    id,
                },
            });
            return deletedAutonomous;
        });
    }
    findAutonomousByLogin({ login, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const autonomousId = yield prisma.autonomous.findUnique({
                where: {
                    login,
                },
            });
            return autonomousId;
        });
    }
    updatePassword({ id, password, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPassword = yield prisma.autonomous.update({
                where: {
                    id,
                },
                data: {
                    password,
                },
                select: {
                    password: true,
                },
            });
            return newPassword;
        });
    }
}
exports.default = new AutonomousRepository();
