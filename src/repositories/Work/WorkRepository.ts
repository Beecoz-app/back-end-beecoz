import { PrismaClient, Work, Prisma, PrismaPromise } from "@prisma/client";
import {
  WorkRepositoryDeleteDTO,
  WorkRepositoryFindWorkByIdDTO,
  WorkRepositoryFindWorkByStatusDTO,
  WorkRepositoryFinishDTO,
} from "../../interfaces/DTOs/repositories/Work/WorkRepositoryDTO";
import { IWorkRepository } from "../../interfaces/repositories/Work/IWorkRepository";
const prisma = new PrismaClient();

class WorkRepository implements IWorkRepository {
  async open({ interestId }: { interestId: number }): Promise<Work> {
    const work = await prisma.work.create({
      data: {
        interestId,
        status: "Progress",
        ratingId: 1,
      },
    });

    await prisma.work.update({
      where: {
        id: work.id
      },
      data: {
        interest: {
          update: {
            publication: {
              update: {
                status: 'Open'
              }
            }
          }
        }
      }
    })
    return work;
  }

  async getAll(userId: number) {
    const works = await prisma.work.findMany({
      where: {
        interest: {
          publication: {
            client: {
              id: userId
            }
          }
        }
      },
      include: {
        interest: {
          include: {
            autonomous: {
              select: {
                id: true
              }
            },
            publication: true
          }
        }
      }
    });

    return works
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
  async finish({
    id,
    ratingData: { stars, comment },
    autonomousId,
  }: WorkRepositoryFinishDTO): Promise<Work> {
    const newWork = await prisma.work.update({
      where: {
        id,
      },
      data: {
        status: "Completed",
        ratingId: stars,
      },
    });

    const workCountByAutonomousId = await prisma.work.aggregate({
      where: {
        interest: {
          autonomousId,
        },
      },
      _count: true,
    });

    if (workCountByAutonomousId._count >= 10) {
      console.log("vc tem trabalhos finzalizdos mais de 10 ");

      const averageToUpateAutonomous = await prisma.work.aggregate({
        _avg: {
          ratingId: true,
        },
        where: {
          interest: {
            autonomousId,
          },
        },
      });

      if (
        Number(averageToUpateAutonomous._avg.ratingId) >= 3 &&
        Number(averageToUpateAutonomous._avg.ratingId) < 4
      ) {
        await prisma.autonomous.update({
          data: {
            typeId: 2,
          },
          where: {
            id: autonomousId,
          },
        });
      }
      if (workCountByAutonomousId._count >= 20 && Number(averageToUpateAutonomous._avg.ratingId) >= 4) {
        await prisma.autonomous.update({
          data: {
            typeId: 3,
          },
          where: {
            id: autonomousId,
          },
        });
      }
    }

    return newWork;
  }

  async findByInterest(interestId: number) {
    const work = await prisma.work.findUnique({
      where: {
        interestId: interestId
      }
    })

    return work
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
