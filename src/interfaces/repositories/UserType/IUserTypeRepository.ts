import { Prisma, PrismaPromise, TypeUser } from "@prisma/client";
import { TypeUserRepositoryCreateDTO, TypeUserRepositoryDeleteDTO, TypeUserRepositoryFindByLevelDTO, TypeUserRepositoryUpdateDTO } from "../../DTOs/repositories/TypeUser/TypeUserRepositoryDTO";

export interface IUserTypeRepository {
    create({data}: TypeUserRepositoryCreateDTO): Promise<TypeUser>;
    read(): Promise<PrismaPromise<TypeUser[]>>;
    update({id, data}: TypeUserRepositoryUpdateDTO): Promise<TypeUser>;
    delete({id}: TypeUserRepositoryDeleteDTO): Promise<TypeUser>;
    findByLevel({level}: TypeUserRepositoryFindByLevelDTO): Promise<number>;
}