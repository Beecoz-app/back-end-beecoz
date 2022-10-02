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
  AutonomousRepositoryUpdatePasswordDTO,
} from "../../interfaces/DTOs/repositories/Autonomous/AutonomousRepositoryDTO";
import { IAutonomousRepository } from "../../interfaces/repositories/Autonomous/IAutonomousRepository";
const prisma = new PrismaClient();

class AutonomousRepository implements IAutonomousRepository {
  updatePassword({
    id,
    password,
  }: AutonomousRepositoryUpdatePasswordDTO): Promise<Autonomous> {
    const newPassword = prisma.autonomous.update({
      where: {
        id,
      },
      data: {
        password,
      },
    });
    return newPassword;
  }

  async create({
    data: { autonomousData, serviceData },
  }: AutonomousRepositoryCreateDTO): Promise<Autonomous> {
    const autonomous = await prisma.autonomous.create({
      data: {
        name: autonomousData.name,
        lastName: autonomousData.lastName,
        login: autonomousData.login,
        password: autonomousData.password,
        gender: autonomousData.gender,
        bornDate: autonomousData.bornDate,
        cpf: autonomousData.cpf,
        cnpj: autonomousData.cnpj,
        typeId: autonomousData.typeId,
        profileId: autonomousData.profileId,

        service: {
          create: {
            servTypeId: serviceData,
          },
        },
      },
      include: {
        service: true,
        profile: true,
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
    data: { autonomousData, serviceData, profileData },
  }: AutonomousRepositoryUpdateDTO): Promise<Autonomous> {
    const newAutonomous = await prisma.autonomous.update({
      where: {
        id,
      },
      data: {
        ...autonomousData,

        service: {
          update: {
            data: {
              servTypeId: serviceData,
            },
            where: {
              autonomousId: id,
            },
          },
        },

        profile: {
          update: {
            biography: profileData.biography,
          },
        },
      },
      include: {
        profile: true,
        service: true
      }
    });
    return newAutonomous;
  }
  async delete({ id }: AutonomousRepositoryDeleteDTO): Promise<Autonomous> {
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
  async findAutonomousByLogin({
    login,
  }: AutonomousRepositoryFindAutonomousByLoginDTO): Promise<Autonomous | null> {
    const autonomousId = await prisma.autonomous.findUnique({
      where: {
        login,
      },
    });
    return autonomousId;
  }
}

export default new AutonomousRepository();
