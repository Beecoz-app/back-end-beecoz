import { Prisma, PrismaPromise, Service } from "@prisma/client";
import { ServiceRepositoryCreateDTO, ServiceRepositoryDeleteDTO, ServiceRepositoryUpdateDTO, ServiceRepositoryFindServiceByIdDTO } from "../../DTOs/repositories/Service/ServiceRepositoryDTO";

export interface IServiceRepository {
    create({data}: ServiceRepositoryCreateDTO): Promise<Service>;
    read(): Promise<PrismaPromise<Service[]>>;
    update({id, data}: ServiceRepositoryUpdateDTO): Promise<Service>;
    delete({id}: ServiceRepositoryDeleteDTO): Promise<Service>;
    findServiceById({id}: ServiceRepositoryFindServiceByIdDTO): Promise<Service | null>;
}