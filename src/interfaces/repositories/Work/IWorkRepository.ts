import { Prisma, PrismaPromise, Work } from "@prisma/client";
import { WorkRepositoryCreateDTO, WorkRepositoryDeleteDTO, WorkRepositoryFinishDTO, WorkRepositoryFindWorkByIdDTO, WorkRepositoryFindWorkByStatusDTO } from "../../DTOs/repositories/Work/WorkRepositoryDTO";

export interface IWorkRepository {
    open({interestId, ratingId}: {interestId: number, ratingId: number}): Promise<Work>;
    read(): Promise<PrismaPromise<Work[]>>;
    finish({id}: WorkRepositoryFinishDTO): Promise<Work>;
    delete({id}: WorkRepositoryDeleteDTO): Promise<Work>;
    findWorkById({id}: WorkRepositoryFindWorkByIdDTO): Promise<Work | null>;
    findWorkByStatus({status}: WorkRepositoryFindWorkByStatusDTO): Promise<number>;
}