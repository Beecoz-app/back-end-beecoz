import { Prisma, PrismaPromise, TypeUser } from "@prisma/client";
import { TypeUserRepositoryCreateDTO, TypeUserRepositoryDeleteDTO, TypeUserRepositoryFindByLevelDTO, TypeUserRepositoryUpdateDTO } from "../../DTOs/repositories/TypeUser/TypeUserRepositoryDTO";

export interface IUserTypeRepository {
    create({data}: TypeUserRepositoryCreateDTO): Promise<TypeUser>;
    read(): Promise<PrismaPromise<TypeUser[]>>;
    update({id, data}: TypeUserRepositoryUpdateDTO): Promise<Prisma.Prisma__LoginClient<TypeUser>>;
    delete({id}: TypeUserRepositoryDeleteDTO): Promise<Prisma.Prisma__LoginClient<TypeUser>>;
    findByLevel({level}: TypeUserRepositoryFindByLevelDTO): Promise<number>;
}