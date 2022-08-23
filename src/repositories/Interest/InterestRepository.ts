import { PrismaClient ,Interest, Prisma, PrismaPromise } from "@prisma/client";
const prisma = new PrismaClient()

interface CreateDTO {
    data: Interest
}
interface UpdateDTO {
    id: number;
    data: Interest
}
interface DeleteDTO {
    id: number
}

class InterestRepository {
    async create({data}: CreateDTO): Promise<Interest> {
        const interest = await prisma.interest.create({
            data: {
                ...data
            }
        })
        return interest
    }
    async read(): Promise<PrismaPromise<Interest[]>> {
        const interests = await prisma.interest.findMany()
        return interests

    }
    async update({id, data}: UpdateDTO): Promise<Prisma.Prisma__LoginClient<Interest>> {
        const newInterest = await prisma.interest.update({
            where: {
                id
            },
            data: {
                ...data
            }
        })
        return newInterest
    }
    async delete({id}: DeleteDTO): Promise<Prisma.Prisma__LoginClient<Interest>> {
        const deletedInterest = await prisma.interest.delete({
            where: {
                id
            }
        })
        return deletedInterest
    }
}

export default new InterestRepository()