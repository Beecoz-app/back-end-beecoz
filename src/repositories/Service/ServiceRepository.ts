import { PrismaClient ,Service, Prisma, PrismaPromise } from "@prisma/client";
import { ServiceRepositoryCreateDTO, ServiceRepositoryDeleteDTO, ServiceRepositoryUpdateDTO } from "../../interfaces/DTOs/repositories/Service/ServiceRepositoryDTO";
import { IServiceRepository } from "../../interfaces/repositories/Service/IServiceRepository";
const prisma = new PrismaClient()

class ServiceRepository implements IServiceRepository {
    async create({data}: ServiceRepositoryCreateDTO): Promise<Service> {
        const service = await prisma.service.create({
            data: {
                ...data
            }
        })
        return service
    }
    async read(): Promise<PrismaPromise<Service[]>> {
        const services = await prisma.service.findMany()
        return services

    }
    async update({id, data}: ServiceRepositoryUpdateDTO): Promise<Prisma.Prisma__LoginClient<Service>> {
        const newService = await prisma.service.update({
            where: {
                id
            },
            data: {
                ...data
            }
        })
        return newService
    }
    async delete({id}: ServiceRepositoryDeleteDTO): Promise<Prisma.Prisma__LoginClient<Service>> {
        const deletedService = await prisma.service.delete({
            where: {
                id
            }
        })
        return deletedService
    }
}

export default new ServiceRepository()