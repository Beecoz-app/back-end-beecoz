import { Prisma, PrismaPromise, Work } from "@prisma/client";
import { WorkRepositoryCreateDTO, WorkRepositoryDeleteDTO, WorkRepositoryUpdateDTO, WorkRepositoryFindWorkByIdDTO, WorkRepositoryFindWorkByStatusDTO } from "../../DTOs/repositories/Work/WorkRepositoryDTO";

export interface IWorkRepository {
    open(idInterest: string): Promise<Work>;
    read(): Promise<PrismaPromise<Work[]>>;
    update({id, data}: WorkRepositoryUpdateDTO): Promise<Work>;
    delete({id}: WorkRepositoryDeleteDTO): Promise<Work>;
    findWorkById({id}: WorkRepositoryFindWorkByIdDTO): Promise<Work | null>;
    findWorkByStatus({status}: WorkRepositoryFindWorkByStatusDTO): Promise<number>;
}