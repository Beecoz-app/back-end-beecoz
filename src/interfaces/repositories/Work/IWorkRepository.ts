import { Prisma, PrismaPromise, Work } from "@prisma/client";
import { WorkRepositoryCreateDTO, WorkRepositoryDeleteDTO, WorkRepositoryUpdateDTO, WorkRepositoryFindWorkByIdDTO, WorkRepositoryFindWorkByStatusDTO } from "../../DTOs/repositories/Work/WorkRepositoryDTO";

export interface IWorkRepository {
    create({data}: WorkRepositoryCreateDTO): Promise<Work>;
    read(): Promise<PrismaPromise<Work[]>>;
    update({id, data}: WorkRepositoryUpdateDTO): Promise<Prisma.Prisma__LoginClient<Work>>;
    delete({id}: WorkRepositoryDeleteDTO): Promise<Prisma.Prisma__LoginClient<Work>>;
    findWorkById({id}: WorkRepositoryFindWorkByIdDTO): Promise<Work | null>;
    findWorkByStatus({status}: WorkRepositoryFindWorkByStatusDTO): Promise<number>;
}