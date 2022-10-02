import {
  PrismaClient,
  Interest,
  PrismaPromise,
} from "@prisma/client";
import {
  InterestRepositoryCreateDTO,
  InterestRepositoryDeleteDTO,
  InterestRepositoryFindInterestByPublicationDTO,
  InterestRepositoryUpdateDTO,
} from "../../interfaces/DTOs/repositories/Interest/InterestRepositoryDTO";
import { IInterestRepository } from "../../interfaces/repositories/Interest/IInterestRepository";
import { InterestRepositoryFindInterestByIdDTO } from "../../interfaces/DTOs/repositories/Interest/InterestRepositoryDTO";

const prisma = new PrismaClient();

class InterestRepository implements IInterestRepository {
  async findInterestById({
    id,
  }: InterestRepositoryFindInterestByIdDTO): Promise<Interest | null> {
    const interestId = await prisma.interest.findUnique({
      where: {
        id,
      },
      include: {
        autonomous: {
          select: {
            id: true,
          },
        },
      },
    });
    return interestId;
  }

  async create({ data }: InterestRepositoryCreateDTO): Promise<Interest> {
    const interest = await prisma.interest.create({
      data: {
        ...data,
      },
    });
    return interest;
  }
  async read(): Promise<PrismaPromise<Interest[]>> {
    const interests = await prisma.interest.findMany();
    return interests;
  }
  async readByPublication({
    publicationId,
  }: InterestRepositoryFindInterestByPublicationDTO): Promise<Interest[]> {
    const interest = await prisma.interest.findMany({
      where: {
        publicationId,
      },
      include: {
        autonomous: {
          select: {
            id: true,
          },
        },
      },
    });

    return interest;
  }
  async update({ id, data }: InterestRepositoryUpdateDTO): Promise<Interest> {
    const newInterest = await prisma.interest.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return newInterest;
  }
  async delete({ id }: InterestRepositoryDeleteDTO): Promise<Interest> {
    const deletedInterest = await prisma.interest.delete({
      where: {
        id,
      },
    });
    return deletedInterest;
  }
}

export default new InterestRepository();
