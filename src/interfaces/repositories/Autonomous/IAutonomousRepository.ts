import { Autonomous, AutonomousProfile, Prisma, PrismaPromise, Service } from "@prisma/client"
import { AutonomousRepositoryCreateDTO, AutonomousRepositoryDeleteDTO, AutonomousRepositoryUpdateDTO, AutonomousRepositoryFindAutonomousByIdDTO, AutonomousRepositoryFindAutonomousByLoginDTO, AutonomousRepositoryUpdatePasswordDTO } from "../../DTOs/repositories/Autonomous/AutonomousRepositoryDTO"

export interface IAutonomousRepository {
    create({data}: AutonomousRepositoryCreateDTO): Promise<Autonomous>;
    read(): Promise<PrismaPromise<Autonomous[]>>;
    update({id, data}: AutonomousRepositoryUpdateDTO): Promise<Autonomous>;
    delete({id}: AutonomousRepositoryDeleteDTO): Promise<Autonomous>;
    findAutonomousById({id}: AutonomousRepositoryFindAutonomousByIdDTO): Promise<(Autonomous & {
        profile: AutonomousProfile;
        service: Service[];
    }) | null>;
    findAutonomousByLogin({login}: AutonomousRepositoryFindAutonomousByLoginDTO): Promise<Autonomous | null>
    updatePassword({id, password}: AutonomousRepositoryUpdatePasswordDTO): Promise<Prisma.Prisma__AutonomousClient<{
        password: string;
    }>>;
}