import { PrismaClient ,Service, Prisma, PrismaPromise } from "@prisma/client";
const prisma = new PrismaClient()

interface CreateDTO {
    data: Service
}
interface UpdateDTO {
    id: number;
    data: Service
}
interface DeleteDTO {
    id: number
}

class ServiceRepository {
    async create({data}: CreateDTO): Promise<Service> {
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
    async update({id, data}: UpdateDTO): Promise<Prisma.Prisma__LoginClient<Service>> {
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
    async delete({id}: DeleteDTO): Promise<Prisma.Prisma__LoginClient<Service>> {
        const deletedService = await prisma.service.delete({
            where: {
                id
            }
        })
        return deletedService
    }
}

export default new ServiceRepository()