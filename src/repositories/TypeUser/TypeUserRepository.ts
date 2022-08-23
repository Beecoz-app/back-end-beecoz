import { PrismaClient ,TypeUser, Prisma, PrismaPromise } from "@prisma/client";
const prisma = new PrismaClient()

interface CreateDTO {
    data: TypeUser
}
interface UpdateDTO {
    id: number;
    data: TypeUser
}
interface DeleteDTO {
    id: number
}

class TypeUserRepository {
    async create({data}: CreateDTO): Promise<TypeUser> {
        const typeUser = await prisma.typeUser.create({
            data: {
                ...data
            }
        })
        return typeUser
    }
    async read(): Promise<PrismaPromise<TypeUser[]>> {
        const typesUser = await prisma.typeUser.findMany()
        return typesUser

    }
    async update({id, data}: UpdateDTO): Promise<Prisma.Prisma__LoginClient<TypeUser>> {
        const newTypeUser = await prisma.typeUser.update({
            where: {
                id
            },
            data: {
                ...data
            }
        })
        return newTypeUser
    }
    async delete({id}: DeleteDTO): Promise<Prisma.Prisma__LoginClient<TypeUser>> {
        const deletedTypeUser = await prisma.typeUser.delete({
            where: {
                id
            }
        })
        return deletedTypeUser
    }
}

export default new TypeUserRepository()