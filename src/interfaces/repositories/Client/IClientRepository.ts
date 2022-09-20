import { Client, Prisma, PrismaPromise } from "@prisma/client";
import { ClientRepositoryCreateDTO, ClientRepositoryDeleteDTO, ClientRepositoryFindClientByIdDTO, ClientRepositoryFindClientByLoginIdDTO, ClientRepositoryUpdateDTO } from "../../DTOs/repositories/Client/ClientRepositoryDTO";

export interface IClientRepository {
    create({data}: ClientRepositoryCreateDTO): Promise<Client>;
    read(): Promise<PrismaPromise<Client[]>>;
    update({id, data}: ClientRepositoryUpdateDTO): Promise<Client>;
    delete({id}: ClientRepositoryDeleteDTO): Promise<Client>;
    findClientById({id}: ClientRepositoryFindClientByIdDTO): Promise<Client | null>;
    findClientByLoginId({loginId}: ClientRepositoryFindClientByLoginIdDTO): Promise<Client | null>
}