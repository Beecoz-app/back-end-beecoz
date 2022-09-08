import { ClientProfile, Prisma, PrismaPromise } from "@prisma/client";
import { ClientProfileRepositoryCreateDTO, ClientProfileRepositoryDeleteDTO, ClientProfileRepositoryUpdateDTO, ClientProfileRepositoryFindClientProfileByIdDTO } from "../../../DTOs/repositories/Client/ClientProfile/ClientProfileRepositoryDTO";

export interface IClientProfileRepository {
    create({data}: ClientProfileRepositoryCreateDTO): Promise<ClientProfile>;
    read(): Promise<PrismaPromise<ClientProfile[]>>;
    update({id, data}: ClientProfileRepositoryUpdateDTO): Promise<Prisma.Prisma__LoginClient<ClientProfile>>;
    delete({id}: ClientProfileRepositoryDeleteDTO): Promise<Prisma.Prisma__LoginClient<ClientProfile>>;
    findClientProfileById({id}: ClientProfileRepositoryFindClientProfileByIdDTO): Promise<ClientProfile | null>;
}