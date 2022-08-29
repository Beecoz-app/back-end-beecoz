import { PrismaClient ,Client, PrismaPromise, Prisma, Login } from "@prisma/client";
const prisma = new PrismaClient()

interface CreateDTO {
    data: Omit<Client, 'id' | 'created_at' | 'updated_at'>
}
interface UpdateDTO {
    id: number;
    data: Client
}
interface DeleteDTO {
    id: number
}

class ClientRepository {
    async create({data}: CreateDTO): Promise<Client> {
        const client = await prisma.client.create({
            data: {
                ...data
                
            }
        })
        return client
    }
    async read(): Promise<PrismaPromise<Client[]>> {
        const clients = await prisma.client.findMany()
        return clients

    }
    async updateClient({id, data}: UpdateDTO): Promise<Prisma.Prisma__LoginClient<Client>> {
        const newClient = await prisma.client.update({
            where: {
                id
            },
            data: {
                ...data
            }
        })
        return newClient
    }

   
    async delete({id}: DeleteDTO): Promise<Prisma.Prisma__LoginClient<Client>> {
        const deletedClient = await prisma.client.delete({
            where: {
                id
            }
        })
        return deletedClient
    }
}

export default new ClientRepository()