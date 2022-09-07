import { Prisma, PrismaPromise, Rating } from "@prisma/client";
import { RatingRepositoryCreateDTO, RatingRepositoryDeleteDTO, RatingRepositoryUpdateDTO, RatingRepositoryFindRatingByIdDTO } from "../../DTOs/repositories/Rating/RatingRepositoryDTO";

export interface IRatingRepository {
    create({data}: RatingRepositoryCreateDTO): Promise<Rating>;
    read(): Promise<PrismaPromise<Rating[]>>;
    update({id, data}: RatingRepositoryUpdateDTO): Promise<Prisma.Prisma__LoginClient<Rating>>;
    delete({id}: RatingRepositoryDeleteDTO): Promise<Prisma.Prisma__LoginClient<Rating>>;
    findRatingById({id}: RatingRepositoryFindRatingByIdDTO): Promise<Rating | null>;
}