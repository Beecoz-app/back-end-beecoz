import {
  PrismaClient,
  Autonomous,
  PrismaPromise,
  Prisma,
} from "@prisma/client";
import {
  AutonomousRepositoryCreateDTO,
  AutonomousRepositoryDeleteDTO,
  AutonomousRepositoryFindAutonomousByIdDTO,
  AutonomousRepositoryFindAutonomousByLoginDTO,
  AutonomousRepositoryUpdateDTO,
} from "../../interfaces/DTOs/repositories/Autonomous/AutonomousRepositoryDTO";
import { IAutonomousRepository } from "../../interfaces/repositories/Autonomous/IAutonomousRepository";
const prisma = new PrismaClient();

class AutonomousRepository implements IAutonomousRepository {
  async create({ data }: AutonomousRepositoryCreateDTO): Promise<Autonomous> {
    const autonomous = await prisma.autonomous.create({
      data: {
        ...data,
      },
    });
    return autonomous;
  }
  async read(): Promise<PrismaPromise<Autonomous[]>> {
    const autonomous = await prisma.autonomous.findMany();
    return autonomous;
  }
  async update({
    id,
    data,
  }: AutonomousRepositoryUpdateDTO): Promise<
    Autonomous
  > {
    const newAutonomous = await prisma.autonomous.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return newAutonomous;
  }
  async delete({
    id,
  }: AutonomousRepositoryDeleteDTO): Promise<
    Autonomous
  > {
    const deletedAutonomous = await prisma.autonomous.delete({
      where: {
        id,
      },
    });
    return deletedAutonomous;
  }
  async findAutonomousById({
    id,
  }: AutonomousRepositoryFindAutonomousByIdDTO): Promise<Autonomous | null> {
    const autonomousId = await prisma.autonomous.findUnique({
      where: {
        id,
      },
    });
    return autonomousId;
  }
  async findAutonomousByLogin({ login }: AutonomousRepositoryFindAutonomousByLoginDTO): Promise<Autonomous | null> {
    const autonomousId = await prisma.autonomous.findUnique({
      where: {
        login,
      },
    });
    return autonomousId;
  }
}

export default new AutonomousRepository();
