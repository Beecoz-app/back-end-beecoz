import { Autonomous, AutonomousProfile, Prisma, PrismaPromise } from "@prisma/client"
import { AutonomousProfileRepositoryCreateDTO, AutonomousProfileRepositoryDeleteDTO, AutonomousProfileRepositoryUpdateDTO } from "../../../DTOs/repositories/Autonomous/AutonomousProfile/AutonomousProfileRepostoryDTO";

export interface IAutonomousProfileRepository {
    create({data}: AutonomousProfileRepositoryCreateDTO): Promise<AutonomousProfile>;
    read(): Promise<PrismaPromise<AutonomousProfile[]>>;
    update({id, data}: AutonomousProfileRepositoryUpdateDTO): Promise<Prisma.Prisma__LoginClient<AutonomousProfile>>;
    delete({id}: AutonomousProfileRepositoryDeleteDTO): Promise<Prisma.Prisma__LoginClient<AutonomousProfile>>;
}