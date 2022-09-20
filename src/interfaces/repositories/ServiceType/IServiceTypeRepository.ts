import { Prisma, PrismaPromise, ServiceType } from "@prisma/client";
import { ServiceTypeRepositoryCreateDTO, ServiceTypeRepositoryUpdateDTO, ServiceTypeRepositoryDeleteDTO, ServiceTypeRepositoryFindServiceTypeByIdDTO } from "../../DTOs/repositories/ServiceType/ServiceTypeRepositoryDTO";

export interface IServiceTypeRepository {
    create({data}: ServiceTypeRepositoryCreateDTO): Promise<ServiceType>;
    read(): Promise<PrismaPromise<ServiceType[]>>;
    update({id, data}: ServiceTypeRepositoryUpdateDTO): Promise<ServiceType>;
    delete({id}: ServiceTypeRepositoryDeleteDTO): Promise<ServiceType>;
    findServiceTypeById({id}: ServiceTypeRepositoryFindServiceTypeByIdDTO): Promise<ServiceType | null>;
}