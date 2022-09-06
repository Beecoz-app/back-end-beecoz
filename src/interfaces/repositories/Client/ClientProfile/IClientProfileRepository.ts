import { ClientProfile, Prisma, PrismaPromise } from "@prisma/client";
import { ClientProfileRepositoryCreateDTO, ClientProfileRepositoryDeleteDTO, ClientProfileRepositoryUpdateDTO } from "../../../DTOs/repositories/Client/ClientProfile/ClientProfileRepositoryDTO";

export interface IClientpProfileRepository {
    create({data}: ClientProfileRepositoryCreateDTO): Promise<ClientProfile>;
    read(): Promise<PrismaPromise<ClientProfile[]>>;
    update({id, data}: ClientProfileRepositoryUpdateDTO): Promise<Prisma.Prisma__LoginClient<ClientProfile>>;
    delete({id}: ClientProfileRepositoryDeleteDTO): Promise<Prisma.Prisma__LoginClient<ClientProfile>>;
}