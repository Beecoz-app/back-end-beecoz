import { PrismaClient ,Login, Prisma, PrismaPromise } from "@prisma/client";
const prisma = new PrismaClient()

interface CreateDTO {
    data: Omit<Login, 'id' | 'created_at' | 'updated_at'>
}
interface UpdateDTO {
    id: number;
    data: Omit<Login, 'id' | 'created_at' | 'updated_at'>
}
interface DeleteDTO {
    id: number
}

class LoginRepository {
    async create({data}: CreateDTO): Promise<Login> {
        const login = await prisma.login.create({
            data: {
                ...data
            }
        })
        return login
    }
    async read(): Promise<PrismaPromise<Login[]>> {
        const logins = await prisma.login.findMany()
        return logins

    }
    async update({id, data}: UpdateDTO): Promise<Prisma.Prisma__LoginClient<Login>> {
        const newLogin = await prisma.login.update({
            where: {
                id
            },
            data: {
                ...data
            }
        })
        return newLogin
    }
    async delete({id}: DeleteDTO): Promise<Prisma.Prisma__LoginClient<Login>> {
        const deletedLogin = await prisma.login.delete({
            where: {
                id
            }
        })
        return deletedLogin
    }
}

export default new LoginRepository()