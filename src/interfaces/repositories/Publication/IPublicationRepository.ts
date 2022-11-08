import { Prisma, PrismaPromise, Publication } from "@prisma/client";
import { PublicationRepositoryCreateDTO, PublicationRepositoryDeleteDTO, PublicationRepositoryUpdateDTO, PublicationRepositoryFindPublicationByIdDTO, PublicationRepositoryReadDTO, PublicationRepositoryFindAllPublicationOnlyQueenOrIntermediateAutonomousDTO, PublicationRepositoryFindAllPublicationOnlyBegginerAutonomousDTO } from "../../DTOs/repositories/Publication/PublicationRepositoryDTO";

export interface IPublicationRepository {
    create({ data }: PublicationRepositoryCreateDTO): Promise<Publication>;
    read({ clientId }: PublicationRepositoryReadDTO): Promise<Publication[]>;
    update({ id, data }: PublicationRepositoryUpdateDTO): Promise<Publication>;
    delete({ id }: PublicationRepositoryDeleteDTO): Promise<Publication>;
    findPublicationById({ id }: PublicationRepositoryFindPublicationByIdDTO): Promise<Publication | null>;
    findAllPublicationOnlyQueenOrIntermediateAutonomous({servTypeId}: PublicationRepositoryFindAllPublicationOnlyQueenOrIntermediateAutonomousDTO): Promise<Publication[]>
    findAllPublicationOnlyBegginerAutonomous({servTypeId}: PublicationRepositoryFindAllPublicationOnlyBegginerAutonomousDTO): Promise<Publication[]>
}