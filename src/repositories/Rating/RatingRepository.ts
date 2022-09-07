import { PrismaClient ,Rating, Prisma, PrismaPromise } from "@prisma/client";
import { RatingRepositoryCreateDTO, RatingRepositoryDeleteDTO, RatingRepositoryFindRatingByIdDTO, RatingRepositoryUpdateDTO } from "../../interfaces/DTOs/repositories/Rating/RatingRepositoryDTO";
import { IRatingRepository } from "../../interfaces/repositories/Rating/IRatingRepository";
const prisma = new PrismaClient()

class RatingRepository implements IRatingRepository {

    async findRatingById({ id }: RatingRepositoryFindRatingByIdDTO): Promise<Rating | null> {
        const ratingId = await prisma.rating.findUnique({
            where:{
              id,
            }
          })
          return ratingId;
        }

    async create({data}: RatingRepositoryCreateDTO): Promise<Rating> {
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
    async update({id, data}: RatingRepositoryUpdateDTO): Promise<Prisma.Prisma__LoginClient<Rating>> {
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
    async delete({id}: RatingRepositoryDeleteDTO): Promise<Prisma.Prisma__LoginClient<Rating>> {
        const deletedRating = await prisma.rating.delete({
            where: {
                id
            }
        })
        return deletedRating
    }
}

export default new RatingRepository()