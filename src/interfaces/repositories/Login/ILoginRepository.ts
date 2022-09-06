import { Login, Prisma, PrismaPromise } from "@prisma/client";
import { LoginRepositoryCreateDTO, LoginRepositoryDeleteDTO, LoginRepositoryUpdateDTO } from "../../DTOs/repositories/Login/LoginReposityDTO";

export interface ILoginRepository {
    create({data}: LoginRepositoryCreateDTO): Promise<Login>;
    read(): Promise<PrismaPromise<Login[]>>;
    update({id, data}: LoginRepositoryUpdateDTO): Promise<Prisma.Prisma__LoginClient<Login>>;
    delete({id}: LoginRepositoryDeleteDTO): Promise<Prisma.Prisma__LoginClient<Login>>;
}