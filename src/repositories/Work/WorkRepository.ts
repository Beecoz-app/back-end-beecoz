import { PrismaClient ,Work, Prisma, PrismaPromise } from "@prisma/client";
const prisma = new PrismaClient()

interface CreateDTO {
    data: Work
}
interface UpdateDTO {
    id: number;
    data: Work
}
interface DeleteDTO {
    id: number
}

class WorkRepository {
    async create({data}: CreateDTO): Promise<Work> {
        const work = await prisma.work.create({
            data: {
                ...data
            }
        })
        return work
    }
    async read(): Promise<PrismaPromise<Work[]>> {
        const works = await prisma.work.findMany()
        return works

    }
    async update({id, data}: UpdateDTO): Promise<Prisma.Prisma__LoginClient<Work>> {
        const newWork = await prisma.work.update({
            where: {
                id
            },
            data: {
                ...data
            }
        })
        return newWork
    }
    async delete({id}: DeleteDTO): Promise<Prisma.Prisma__LoginClient<Work>> {
        const deletedWork = await prisma.work.delete({
            where: {
                id
            }
        })
        return deletedWork
    }
}

export default new WorkRepository()