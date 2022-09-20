import { Prisma, PrismaPromise, Publication } from "@prisma/client";
import { PublicationRepositoryCreateDTO, PublicationRepositoryDeleteDTO, PublicationRepositoryUpdateDTO, PublicationRepositoryFindPublicationByIdDTO } from "../../DTOs/repositories/Publication/PublicationRepositoryDTO";

export interface IPublicationRepository {
    create({data}: PublicationRepositoryCreateDTO): Promise<Publication>;
    read(): Promise<PrismaPromise<Publication[]>>;
    update({id, data}: PublicationRepositoryUpdateDTO): Promise<Publication>;
    delete({id}: PublicationRepositoryDeleteDTO): Promise<Publication>;
    findPublicationById({id}: PublicationRepositoryFindPublicationByIdDTO): Promise<Publication | null>;
}