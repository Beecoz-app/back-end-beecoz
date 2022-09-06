import { PrismaClient , ClientProfile, PrismaPromise, Prisma } from "@prisma/client";
import { IClientpProfileRepository } from "../../../interfaces/repositories/Client/ClientProfile/IClientProfileRepository";
const prisma = new PrismaClient()

interface CreateDTO {
    data: Omit<ClientProfile, 'id' | 'created_at' | 'updated_at'>
}
interface UpdateDTO {
    id: number;
    data: Omit<ClientProfile, 'id' | 'created_at' | 'updated_at'>
}
interface DeleteDTO {
    id: number
}

class ClientProfileRepository implements IClientpProfileRepository {
    async create({data}: CreateDTO): Promise<ClientProfile> {
        const clientProfile = await prisma.clientProfile.create({
            data: {
                ...data
            }
        })
        return clientProfile
    }
    async read(): Promise<PrismaPromise<ClientProfile[]>> {
        const clientsProfiles = await prisma.clientProfile.findMany()
        return clientsProfiles

    }
    async update({id, data}: UpdateDTO): Promise<Prisma.Prisma__LoginClient<ClientProfile>> {
        const newClientProfile = await prisma.clientProfile.update({
            where: {
                id
            },
            data: {
                ...data
            }
        })
        return newClientProfile
    }
    async delete({id}: DeleteDTO): Promise<Prisma.Prisma__LoginClient<ClientProfile>> {
        const deletedClientProfile = await prisma.clientProfile.delete({
            where: {
                id
            }
        })
        return deletedClientProfile
    }
}

export default new ClientProfileRepository()