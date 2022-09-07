import { Interest, Prisma, PrismaPromise } from "@prisma/client";
import { InterestRepositoryCreateDTO, InterestRepositoryDeleteDTO, InterestRepositoryUpdateDTO, InterestRepositoryFindInterestByIdDTO } from "../../DTOs/repositories/Interest/InterestRepositoryDTO";

export interface IInterestRepository {
    create({data}: InterestRepositoryCreateDTO): Promise<Interest>;
    read(): Promise<PrismaPromise<Interest[]>>;
    update({id, data}: InterestRepositoryUpdateDTO): Promise<Prisma.Prisma__LoginClient<Interest>>;
    delete({id}: InterestRepositoryDeleteDTO): Promise<Prisma.Prisma__LoginClient<Interest>>;
    findInterestById({id}: InterestRepositoryFindInterestByIdDTO): Promise<Interest | null>;
}