import { PrismaClient ,ServiceType, Prisma, PrismaPromise } from "@prisma/client";
import { ServiceTypeRepositoryCreateDTO, ServiceTypeRepositoryDeleteDTO, ServiceTypeRepositoryUpdateDTO } from "../../interfaces/DTOs/repositories/ServiceType/ServiceTypeRepositoryDTO";
import { IServiceTypeRepository } from "../../interfaces/repositories/ServiceType/IServiceTypeRepository";
const prisma = new PrismaClient()

class ServiceTypeRepository implements IServiceTypeRepository {
    async create({data}: ServiceTypeRepositoryCreateDTO): Promise<ServiceType> {
        const serviceType = await prisma.serviceType.create({
            data: {
                ...data
            }
        })
        return serviceType
    }
    async read(): Promise<PrismaPromise<ServiceType[]>> {
        const servicesTypes = await prisma.serviceType.findMany()
        return servicesTypes

    }
    async update({id, data}: ServiceTypeRepositoryUpdateDTO): Promise<Prisma.Prisma__LoginClient<ServiceType>> {
        const newServiceType = await prisma.serviceType.update({
            where: {
                id
            },
            data: {
                ...data
            }
        })
        return newServiceType
    }
    async delete({id}: ServiceTypeRepositoryDeleteDTO): Promise<Prisma.Prisma__LoginClient<ServiceType>> {
        const deletedServiceType = await prisma.serviceType.delete({
            where: {
                id
            }
        })
        return deletedServiceType
    }
}

export default new ServiceTypeRepository()