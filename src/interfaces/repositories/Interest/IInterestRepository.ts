import { Interest, Prisma, PrismaPromise } from "@prisma/client";
import { InterestRepositoryCreateDTO, InterestRepositoryDeleteDTO, InterestRepositoryUpdateDTO, InterestRepositoryFindInterestByIdDTO, InterestRepositoryFindInterestByPublicationDTO } from "../../DTOs/repositories/Interest/InterestRepositoryDTO";

export interface IInterestRepository {
    create({data}: InterestRepositoryCreateDTO): Promise<Interest>;
    read(): Promise<PrismaPromise<Interest[]>>;
    update({id, data}: InterestRepositoryUpdateDTO): Promise<Interest>;
    delete({id}: InterestRepositoryDeleteDTO): Promise<Interest>;
    findInterestById({id}: InterestRepositoryFindInterestByIdDTO): Promise<Interest | null>;
    readByPublication({publicationId}: InterestRepositoryFindInterestByPublicationDTO): Promise<Interest[]>
}