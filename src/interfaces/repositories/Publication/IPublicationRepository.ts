import { Prisma, PrismaPromise, Publication } from "@prisma/client";
import { PublicationRepositoryCreateDTO, PublicationRepositoryDeleteDTO, PublicationRepositoryUpdateDTO } from "../../DTOs/repositories/Publication/PublicationRepositoryDTO";

export interface IPublicationRepository {
    create({data}: PublicationRepositoryCreateDTO): Promise<Publication>;
    read(): Promise<PrismaPromise<Publication[]>>;
    update({id, data}: PublicationRepositoryUpdateDTO): Promise<Prisma.Prisma__LoginClient<Publication>>;
    delete({id}: PublicationRepositoryDeleteDTO): Promise<Prisma.Prisma__LoginClient<Publication>>;
}