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
class ServiceRepository {
    create({ autonomousId, serviceTypeId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = yield prisma.service.create({
                data: {
                    autonomousId,
                    servTypeId: serviceTypeId
                },
            });
            return service;
        });
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            const services = yield prisma.service.findMany();
            return services;
        });
    }
    findServiceById({ id, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const serviceId = yield prisma.service.findUnique({
                where: {
                    id,
                },
            });
            return serviceId;
        });
    }
    update({ id, data }) {
        return __awaiter(this, void 0, void 0, function* () {
            const newService = yield prisma.service.update({
                where: {
                    id,
                },
                data: Object.assign({}, data),
            });
            return newService;
        });
    }
    delete({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedService = yield prisma.service.delete({
                where: {
                    id,
                },
            });
            return deletedService;
        });
    }
}
exports.default = new ServiceRepository();
