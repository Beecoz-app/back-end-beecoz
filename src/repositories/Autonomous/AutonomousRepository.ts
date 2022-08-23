import { PrismaClient ,Autonomous, PrismaPromise, Prisma } from "@prisma/client";
const prisma = new PrismaClient()

interface CreateDTO {
    data: Autonomous
}
interface UpdateDTO {
    id: number;
    data: Autonomous
}
interface DeleteDTO {
    id: number
}

class AutonomousRepository {
    async create({data}: CreateDTO): Promise<Autonomous> {
        const autonomous = await prisma.autonomous.create({
            data: {
                ...data
            }
        })
        return autonomous
    }
    async read(): Promise<PrismaPromise<Autonomous[]>> {
        const autonomous = await prisma.autonomous.findMany()
        return autonomous

    }
    async update({id, data}: UpdateDTO): Promise<Prisma.Prisma__LoginClient<Autonomous>> {
        const newAutonomous = await prisma.autonomous.update({
            where: {
                id
            },
            data: {
                ...data
            }
        })
        return newAutonomous
    }
    async delete({id}: DeleteDTO): Promise<Prisma.Prisma__LoginClient<Autonomous>> {
        const deletedAutonomous = await prisma.autonomous.delete({
            where: {
                id
            }
        })
        return deletedAutonomous
    }
}

export default new AutonomousRepository()