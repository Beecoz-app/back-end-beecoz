import { PrismaClient ,ServiceType, Prisma, PrismaPromise } from "@prisma/client";
const prisma = new PrismaClient()

interface CreateDTO {
    data: ServiceType
}
interface UpdateDTO {
    id: number;
    data: ServiceType
}
interface DeleteDTO {
    id: number
}

class ServiceTypeRepository {
    async create({data}: CreateDTO): Promise<ServiceType> {
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
    async update({id, data}: UpdateDTO): Promise<Prisma.Prisma__LoginClient<ServiceType>> {
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
    async delete({id}: DeleteDTO): Promise<Prisma.Prisma__LoginClient<ServiceType>> {
        const deletedServiceType = await prisma.serviceType.delete({
            where: {
                id
            }
        })
        return deletedServiceType
    }
}

export default new ServiceTypeRepository()