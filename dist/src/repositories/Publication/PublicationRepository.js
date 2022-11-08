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
class PublicationRepository {
    create({ data }) {
        return __awaiter(this, void 0, void 0, function* () {
            const publication = yield prisma.publication.create({
                data: Object.assign({}, data),
                include: {
                    interest: {
                        select: {
                            id: true
                        }
                    }
                }
            });
            return publication;
        });
    }
    read({ id, clientId, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const publications = yield prisma.publication.findMany({
                where: {
                    clientId
                },
                include: {
                    interest: {
                        include: {
                            autonomous: {
                                select: {
                                    id: true,
                                    name: true,
                                    login: true,
                                },
                            },
                        },
                    }
                }
            });
            return publications;
        });
    }
    findPublicationById({ id, clientId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const publication = yield prisma.publication.findUnique({
                where: {
                    id
                },
                include: {
                    interest: {
                        include: {
                            autonomous: {
                                select: {
                                    id: true
                                }
                            }
                        }
                    }
                }
            });
            return publication;
        });
    }
    findAllPublicationOnlyQueenOrIntermediateAutonomous({ servTypeId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const publication = yield prisma.publication.findMany({
                where: {
                    servTypeId,
                    type: 'Queen'
                },
                include: {
                    interest: {
                        include: {
                            autonomous: {
                                select: {
                                    id: true
                                }
                            }
                        }
                    }
                }
            });
            return publication;
        });
    }
    findAllPublicationOnlyBegginerAutonomous({ servTypeId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const publication = yield prisma.publication.findMany({
                where: {
                    servTypeId,
                    type: 'Beginner'
                },
                include: {
                    interest: {
                        include: {
                            autonomous: {
                                select: {
                                    id: true
                                }
                            }
                        }
                    }
                }
            });
            return publication;
        });
    }
    update({ id, clientId, data, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPublication = yield prisma.publication.update({
                where: {
                    id,
                },
                data: Object.assign({}, data),
            });
            return newPublication;
        });
    }
    delete({ id, clientId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedPublication = yield prisma.publication.delete({
                where: {
                    id
                },
            });
            return deletedPublication;
        });
    }
}
exports.default = new PublicationRepository();
