import { Prisma, PrismaPromise, ServiceType } from "@prisma/client";
import { ServiceTypeRepositoryCreateDTO, ServiceTypeRepositoryUpdateDTO, ServiceTypeRepositoryDeleteDTO, ServiceTypeRepositoryFindServiceTypeByIdDTO } from "../../DTOs/repositories/ServiceType/ServiceTypeRepositoryDTO";

export interface IServiceTypeRepository {
    create({data}: ServiceTypeRepositoryCreateDTO): Promise<ServiceType>;
    read(): Promise<PrismaPromise<ServiceType[]>>;
    update({id, data}: ServiceTypeRepositoryUpdateDTO): Promise<Prisma.Prisma__LoginClient<ServiceType>>;
    delete({id}: ServiceTypeRepositoryDeleteDTO): Promise<Prisma.Prisma__LoginClient<ServiceType>>;
    findServiceTypeById({id}: ServiceTypeRepositoryFindServiceTypeByIdDTO): Promise<ServiceType | null>;
}