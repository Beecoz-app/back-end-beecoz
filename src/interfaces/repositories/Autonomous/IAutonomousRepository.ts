import { Autonomous, Prisma, PrismaPromise } from "@prisma/client"
import { AutonomousRepositoryCreateDTO, AutonomousRepositoryDeleteDTO, AutonomousRepositoryUpdateDTO, AutonomousRepositoryFindAutonomousByIdDTO, AutonomousRepositoryFindAutonomousByLoginIdDTO } from "../../DTOs/repositories/Autonomous/AutonomousRepositoryDTO"

export interface IAutonomousRepository {
    create({data}: AutonomousRepositoryCreateDTO): Promise<Autonomous>;
    read(): Promise<PrismaPromise<Autonomous[]>>;
    update({id, data}: AutonomousRepositoryUpdateDTO): Promise<Autonomous>;
    delete({id}: AutonomousRepositoryDeleteDTO): Promise<Autonomous>;
    findAutonomousById({id}: AutonomousRepositoryFindAutonomousByIdDTO): Promise<Autonomous | null>;
}