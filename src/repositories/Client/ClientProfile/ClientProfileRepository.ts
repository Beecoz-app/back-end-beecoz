import { PrismaClient , ClientProfile, PrismaPromise, Prisma } from "@prisma/client";
import { ClientProfileRepositoryCreateDTO, ClientProfileRepositoryDeleteDTO, ClientProfileRepositoryFindClientProfileByIdDTO, ClientProfileRepositoryUpdateDTO } from "../../../interfaces/DTOs/repositories/Client/ClientProfile/ClientProfileRepositoryDTO";
import { IClientProfileRepository } from "../../../interfaces/repositories/Client/ClientProfile/IClientProfileRepository";
const prisma = new PrismaClient()

class ClientProfileRepository implements IClientProfileRepository {
    async findClientProfileById({ id }: ClientProfileRepositoryFindClientProfileByIdDTO): Promise<ClientProfile | null> {
        const clientProfileId = await prisma.clientProfile.findUnique({
            where: {
                id,
            }
            });
            
        return clientProfileId;
    }
    async create({data}: ClientProfileRepositoryCreateDTO): Promise<ClientProfile> {
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
    async update({id, data}: ClientProfileRepositoryUpdateDTO): Promise<Prisma.Prisma__LoginClient<ClientProfile>> {
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
    async delete({id}: ClientProfileRepositoryDeleteDTO): Promise<Prisma.Prisma__LoginClient<ClientProfile>> {
        const deletedClientProfile = await prisma.clientProfile.delete({
            where: {
                id
            }
        })
        return deletedClientProfile
    }
}

export default new ClientProfileRepository()