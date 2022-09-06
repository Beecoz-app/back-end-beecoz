import { Prisma, PrismaPromise, ServiceType } from "@prisma/client";
import { ServiceRepositoryDeleteDTO, ServiceRepositoryUpdateDTO } from "../../DTOs/repositories/Service/ServiceRepositoryDTO";
import { ServiceTypeRepositoryCreateDTO, ServiceTypeRepositoryUpdateDTO } from "../../DTOs/repositories/ServiceType/ServiceTypeRepositoryDTO";

export interface IServiceTypeRepository {
    create({data}: ServiceTypeRepositoryCreateDTO): Promise<ServiceType>;
    read(): Promise<PrismaPromise<ServiceType[]>>;
    update({id, data}: ServiceTypeRepositoryUpdateDTO): Promise<Prisma.Prisma__LoginClient<ServiceType>>;
    delete({id}: ServiceRepositoryDeleteDTO): Promise<Prisma.Prisma__LoginClient<ServiceType>>;
}