import { PrismaClient, TypeUser, Prisma, PrismaPromise } from "@prisma/client";
import { TypeUserRepositoryCreateDTO, TypeUserRepositoryDeleteDTO, TypeUserRepositoryFindByLevelDTO, TypeUserRepositoryUpdateDTO } from "../../interfaces/DTOs/repositories/TypeUser/TypeUserRepositoryDTO";
import { WorkRepositoryCreateDTO } from "../../interfaces/DTOs/repositories/Work/WorkRepositoryDTO";
import { IUserTypeRepository } from "../../interfaces/repositories/UserType/IUserTypeRepository";
const prisma = new PrismaClient();

class TypeUserRepository implements IUserTypeRepository {
  async create({ data }: TypeUserRepositoryCreateDTO): Promise<TypeUser> {
    const typeUser = await prisma.typeUser.create({
      data: {
        ...data,
      },
    });
    return typeUser;
  }
  async read(): Promise<PrismaPromise<TypeUser[]>> {
    const typesUser = await prisma.typeUser.findMany();
    return typesUser;
  }
  async update({
    id,
    data,
  }: TypeUserRepositoryUpdateDTO): Promise<Prisma.Prisma__LoginClient<TypeUser>> {
    const newTypeUser = await prisma.typeUser.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return newTypeUser;
  }
  async delete({
    id,
  }: TypeUserRepositoryDeleteDTO): Promise<Prisma.Prisma__LoginClient<TypeUser>> {
    const deletedTypeUser = await prisma.typeUser.delete({
      where: {
        id,
      },
    });
    return deletedTypeUser;
  }

  async findByLevel({ level }: TypeUserRepositoryFindByLevelDTO): Promise<number> {
    const type = await prisma.typeUser.findFirst({
      where: {
        level,
      },
    });

    const id = Number(type?.id)
    return id;
  }
}

export default new TypeUserRepository();
