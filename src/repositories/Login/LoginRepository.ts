import { PrismaClient, Login, Prisma, PrismaPromise } from "@prisma/client";
import { LoginRepositoryCreateDTO, LoginRepositoryDeleteDTO, LoginRepositoryFindByIdDTO, LoginRepositoryUpdateDTO, LoginRepositoryUpdatePassword } from "../../interfaces/DTOs/repositories/Login/LoginReposityDTO";
import { ILoginRepository } from "../../interfaces/repositories/Login/ILoginRepository";
const prisma = new PrismaClient();


class LoginRepository implements ILoginRepository {

  async findLoginById({ id }: LoginRepositoryFindByIdDTO): Promise<Login | null> {
    const loginId = await prisma.login.findUnique({
      where:{
        id,
      }
    })
    return loginId;
  }

  async create({ data }: LoginRepositoryCreateDTO): Promise<Login> {
    const login = await prisma.login.create({
      data: {
        ...data,
      },
    });
    return login;
  }
  
  async read(): Promise<PrismaPromise<Login[]>> {
    const logins = await prisma.login.findMany();
    return logins;
  }

  async findByEmail({ email }: { email: string }) {
    const emailExists = await prisma.login.findFirst({
      where: {
        email,
      },
    });
    return emailExists;
  }

  async update({
    id,
    data,
  }: LoginRepositoryUpdateDTO): Promise<Prisma.Prisma__LoginClient<Login>> {
    const newLogin = await prisma.login.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return newLogin;
  }

  async delete({ id }: LoginRepositoryDeleteDTO): Promise<Prisma.Prisma__LoginClient<Login>> {
    const deletedLogin = await prisma.login.delete({
      where: {
        id,
      },
    });
    return deletedLogin;
  }
  async updatePassword({
    id,
    password,
  }: LoginRepositoryUpdatePassword): Promise<Prisma.Prisma__LoginClient<Login>> {
    const newPassword = await prisma.login.update({
      where: {
        id,
      },
      data: {
        password,
      },
    });
    return newPassword;
  }
  async findPasswordById({
    id,
  }: {
    id: number;
  }): Promise<Prisma.Prisma__LoginClient<Login | null>> {
    const password = await prisma.login.findUnique({
      where: {
        id,
      },
    });
    return password;
  }


}

export default new LoginRepository();
