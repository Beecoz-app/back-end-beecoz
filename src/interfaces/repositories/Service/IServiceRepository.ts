import { Prisma, PrismaPromise, Service } from "@prisma/client";
import { ServiceRepositoryCreateDTO, ServiceRepositoryDeleteDTO, ServiceRepositoryUpdateDTO, ServiceRepositoryFindServiceByIdDTO } from "../../DTOs/repositories/Service/ServiceRepositoryDTO";

export interface IServiceRepository {
    create({data}: ServiceRepositoryCreateDTO): Promise<Service>;
    read(): Promise<PrismaPromise<Service[]>>;
    update({id, data}: ServiceRepositoryUpdateDTO): Promise<Prisma.Prisma__LoginClient<Service>>;
    delete({id}: ServiceRepositoryDeleteDTO): Promise<Prisma.Prisma__LoginClient<Service>>;
    findServiceById({id}: ServiceRepositoryFindServiceByIdDTO): Promise<Service | null>;
}