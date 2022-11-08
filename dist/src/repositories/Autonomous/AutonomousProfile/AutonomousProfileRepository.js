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
class AutonomousProfilesRepository {
    findAutonomousProfileById({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const autonomousProfileId = yield prisma.autonomousProfile.findUnique({
                where: {
                    id,
                }
            });
            return autonomousProfileId;
        });
    }
    create({ data }) {
        return __awaiter(this, void 0, void 0, function* () {
            const autonomousProfile = yield prisma.autonomousProfile.create({
                data: Object.assign({}, data)
            });
            return autonomousProfile;
        });
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            const autonomousProfiles = yield prisma.autonomousProfile.findMany();
            return autonomousProfiles;
        });
    }
    update({ id, data }) {
        return __awaiter(this, void 0, void 0, function* () {
            const newAutonomousProfiles = yield prisma.autonomousProfile.update({
                where: {
                    id
                },
                data: Object.assign({}, data)
            });
            return newAutonomousProfiles;
        });
    }
    delete({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedAutonomousProfile = yield prisma.autonomousProfile.delete({
                where: {
                    id
                }
            });
            return deletedAutonomousProfile;
        });
    }
}
exports.default = new AutonomousProfilesRepository();
