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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const beginner = yield prisma.typeUser.upsert({
            where: { id: 1 },
            update: {},
            create: {
                level: 'Beginner'
            }
        });
        const intermediate = yield prisma.typeUser.upsert({
            where: { id: 2 },
            update: {},
            create: {
                level: 'Intermediate'
            }
        });
        const queen = yield prisma.typeUser.upsert({
            where: { id: 3 },
            update: {},
            create: {
                level: 'Queen'
            }
        });
        const marcenarioService = yield prisma.serviceType.upsert({
            where: { id: 1 },
            update: {},
            create: {
                name: 'Marcenaria'
            }
        });
        const churrasqueiroService = yield prisma.serviceType.upsert({
            where: { id: 2 },
            update: {},
            create: {
                name: 'Churrasqueiro'
            }
        });
        const ratingNothing = yield prisma.rating.upsert({
            where: { id: 1 },
            update: {},
            create: {
                stars: 0,
                comment: 'NOthing Rating'
            }
        });
        const ratingOne = yield prisma.rating.upsert({
            where: { id: 2 },
            update: {},
            create: {
                stars: 1,
                comment: 'Start One'
            }
        });
        const ratingTwo = yield prisma.rating.upsert({
            where: { id: 3 },
            update: {},
            create: {
                stars: 2,
                comment: 'Start Two'
            }
        });
        const ratingThree = yield prisma.rating.upsert({
            where: { id: 4 },
            update: {},
            create: {
                stars: 3,
                comment: 'Start Three'
            }
        });
        const ratingFour = yield prisma.rating.upsert({
            where: { id: 5 },
            update: {},
            create: {
                stars: 4,
                comment: 'Start Four'
            }
        });
        const ratingFive = yield prisma.rating.upsert({
            where: { id: 6 },
            update: {},
            create: {
                stars: 5,
                comment: 'Start Five'
            }
        });
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
