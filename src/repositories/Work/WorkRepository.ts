import { PrismaClient, Work, Prisma, PrismaPromise } from "@prisma/client";
import {
  WorkRepositoryCreateDTO,
  WorkRepositoryDeleteDTO,
  WorkRepositoryFindWorkByIdDTO,
  WorkRepositoryFindWorkByStatusDTO,
  WorkRepositoryUpdateDTO,
} from "../../interfaces/DTOs/repositories/Work/WorkRepositoryDTO";
import { IWorkRepository } from "../../interfaces/repositories/Work/IWorkRepository";
const prisma = new PrismaClient();

class WorkRepository implements IWorkRepository {
  async open({interestId, ratingId}: {interestId: number, ratingId: number}): Promise<Work> {
    const work = await prisma.work.create({
      data: {
        interestId,
        status: 'Open',
        ratingId
      },
    });
    return work;
  }
  async read(): Promise<PrismaPromise<Work[]>> {
    const works = await prisma.work.findMany();
    return works;
  }
  async findWorkByStatus({
    status,
  }: WorkRepositoryFindWorkByStatusDTO): Promise<number> {
    const type = await prisma.work.findFirst({
      where: {
        status,
      },
    });
    const id = Number(type?.id);
    return id;
  }

  async findWorkById({
    id,
  }: WorkRepositoryFindWorkByIdDTO): Promise<Work | null> {
    const workId = await prisma.work.findUnique({
      where: {
        id,
      },
    });
    return workId;
  }
  async update({ id, data }: WorkRepositoryUpdateDTO): Promise<Work> {
    const newWork = await prisma.work.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return newWork;
  }
  async delete({ id }: WorkRepositoryDeleteDTO): Promise<Work> {
    const deletedWork = await prisma.work.delete({
      where: {
        id,
      },
    });
    return deletedWork;
  }
}

export default new WorkRepository();
