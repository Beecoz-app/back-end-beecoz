import { Autonomous, AutonomousProfile, Prisma, PrismaPromise } from "@prisma/client"
import { AutonomousProfileRepositoryCreateDTO, AutonomousProfileRepositoryDeleteDTO, AutonomousProfileRepositoryUpdateDTO, AutonomousProfileRepositoryFindAutonomousProfileByIdDTO } from "../../../DTOs/repositories/Autonomous/AutonomousProfile/AutonomousProfileRepostoryDTO";

export interface IAutonomousProfileRepository {
    create({data}: AutonomousProfileRepositoryCreateDTO): Promise<AutonomousProfile>;
    read(): Promise<PrismaPromise<AutonomousProfile[]>>;
    update({id, data}: AutonomousProfileRepositoryUpdateDTO): Promise<AutonomousProfile>;
    delete({id}: AutonomousProfileRepositoryDeleteDTO): Promise<AutonomousProfile>;
    findAutonomousProfileById({id}: AutonomousProfileRepositoryFindAutonomousProfileByIdDTO): Promise<AutonomousProfile  | null>;
}