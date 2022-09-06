import { PrismaClient, TypeUser, Prisma, PrismaPromise } from "@prisma/client";
import { IUserTypeRepository } from "../../interfaces/repositories/UserType/IUserTypeRepository";
const prisma = new PrismaClient();

interface CreateDTO {
  data: Omit<TypeUser, "id" | "created_at" | "updated_at">;
}
interface UpdateDTO {
  id: number;
  data: Omit<TypeUser, "id" | "created_at" | "updated_at">;
}
interface DeleteDTO {
  id: number;
}
interface findByLevelDTO {
  level: "Beginner" | "Intermediate" | "Queen";
}

class TypeUserRepository implements IUserTypeRepository {
  async create({ data }: CreateDTO): Promise<TypeUser> {
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
  }: UpdateDTO): Promise<Prisma.Prisma__LoginClient<TypeUser>> {
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
  }: DeleteDTO): Promise<Prisma.Prisma__LoginClient<TypeUser>> {
    const deletedTypeUser = await prisma.typeUser.delete({
      where: {
        id,
      },
    });
    return deletedTypeUser;
  }

  async findByLevel({ level }: findByLevelDTO): Promise<number> {
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
