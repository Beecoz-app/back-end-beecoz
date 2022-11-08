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
class ServiceTypeRepository {
    create({ data }) {
        return __awaiter(this, void 0, void 0, function* () {
            const serviceType = yield prisma.serviceType.create({
                data: Object.assign({}, data),
            });
            return serviceType;
        });
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            const servicesTypes = yield prisma.serviceType.findMany({
                select: {
                    id: true,
                    name: true,
                },
            });
            return servicesTypes;
        });
    }
    findServiceTypeById({ id, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const serviceId = yield prisma.serviceType.findUnique({
                where: {
                    id,
                },
                select: {
                    id: true,
                    name: true
                }
            });
            return serviceId;
        });
    }
    update({ id, data, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const newServiceType = yield prisma.serviceType.update({
                where: {
                    id,
                },
                data: Object.assign({}, data),
                select: {
                    id: true,
                    name: true
                }
            });
            return newServiceType;
        });
    }
    delete({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedServiceType = yield prisma.serviceType.delete({
                where: {
                    id,
                },
            });
            return deletedServiceType;
        });
    }
}
exports.default = new ServiceTypeRepository();
