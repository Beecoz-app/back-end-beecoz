import { Autonomous, Prisma, PrismaPromise } from "@prisma/client"
import { AutonomousRepositoryCreateDTO, AutonomousRepositoryDeleteDTO, AutonomousRepositoryUpdateDTO, AutonomousRepositoryFindAutonomousByIdDTO } from "../../DTOs/repositories/Autonomous/AutonomousRepositoryDTO"

export interface IAutonomousRepository {
    create({data}: AutonomousRepositoryCreateDTO): Promise<Autonomous>;
    read(): Promise<PrismaPromise<Autonomous[]>>;
    update({id, data}: AutonomousRepositoryUpdateDTO): Promise<Prisma.Prisma__LoginClient<Autonomous>>;
    delete({id}: AutonomousRepositoryDeleteDTO): Promise<Prisma.Prisma__LoginClient<Autonomous>>;
    findAutonomousById({id}: AutonomousRepositoryFindAutonomousByIdDTO): Promise<Autonomous | null>;
}