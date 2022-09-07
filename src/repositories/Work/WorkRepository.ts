import { PrismaClient ,Work, Prisma, PrismaPromise } from "@prisma/client";
import { WorkRepositoryCreateDTO, WorkRepositoryDeleteDTO, WorkRepositoryFindWorkByIdDTO, WorkRepositoryUpdateDTO } from "../../interfaces/DTOs/repositories/Work/WorkRepositoryDTO";
import { IWorkRepository } from "../../interfaces/repositories/Work/IWorkRepository";
const prisma = new PrismaClient()

class WorkRepository implements IWorkRepository {
    
    async findWorkById({ id }: WorkRepositoryFindWorkByIdDTO): Promise<Work | null> {
        const workId = await prisma.work.findUnique({
            where:{
              id,
            }
          })
          return workId;
        }
    async create({data}: WorkRepositoryCreateDTO): Promise<Work> {
        const work = await prisma.work.create({
            data: {
                ...data
            }
        })
        return work
    }
    async read(): Promise<PrismaPromise<Work[]>> {
        const works = await prisma.work.findMany()
        return works

    }
    async update({id, data}: WorkRepositoryUpdateDTO): Promise<Prisma.Prisma__LoginClient<Work>> {
        const newWork = await prisma.work.update({
            where: {
                id
            },
            data: {
                ...data
            }
        })
        return newWork
    }
    async delete({id}: WorkRepositoryDeleteDTO): Promise<Prisma.Prisma__LoginClient<Work>> {
        const deletedWork = await prisma.work.delete({
            where: {
                id
            }
        })
        return deletedWork
    }
}

export default new WorkRepository()