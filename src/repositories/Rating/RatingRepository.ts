import { PrismaClient ,Rating, Prisma, PrismaPromise } from "@prisma/client";
import { IRatingRepository } from "../../interfaces/repositories/Rating/IRatingRepository";
const prisma = new PrismaClient()

interface CreateDTO {
    data: Rating
}
interface UpdateDTO {
    id: number;
    data: Rating
}
interface DeleteDTO {
    id: number
}

class RatingRepository implements IRatingRepository {
    async create({data}: CreateDTO): Promise<Rating> {
        const rating = await prisma.rating.create({
            data: {
                ...data
            }
        })
        return rating
    }
    async read(): Promise<PrismaPromise<Rating[]>> {
        const ratings = await prisma.rating.findMany()
        return ratings

    }
    async update({id, data}: UpdateDTO): Promise<Prisma.Prisma__LoginClient<Rating>> {
        const newRating = await prisma.rating.update({
            where: {
                id
            },
            data: {
                ...data
            }
        })
        return newRating
    }
    async delete({id}: DeleteDTO): Promise<Prisma.Prisma__LoginClient<Rating>> {
        const deletedRating = await prisma.rating.delete({
            where: {
                id
            }
        })
        return deletedRating
    }
}

export default new RatingRepository()