import { PrismaClient ,Publication, Prisma, PrismaPromise } from "@prisma/client";
import { IPublicationRepository } from "../../interfaces/repositories/Publication/IPublicationRepository";
const prisma = new PrismaClient()

interface CreateDTO {
    data: Publication
}
interface UpdateDTO {
    id: number;
    data: Publication
}
interface DeleteDTO {
    id: number
}

class PublicationRepository implements IPublicationRepository{
    async create({data}: CreateDTO): Promise<Publication> {
        const publication = await prisma.publication.create({
            data: {
                ...data
            }
        })
        return publication
    }
    async read(): Promise<PrismaPromise<Publication[]>> {
        const publications = await prisma.publication.findMany()
        return publications

    }
    async update({id, data}: UpdateDTO): Promise<Prisma.Prisma__LoginClient<Publication>> {
        const newPublication = await prisma.publication.update({
            where: {
                id
            },
            data: {
                ...data
            }
        })
        return newPublication
    }
    async delete({id}: DeleteDTO): Promise<Prisma.Prisma__LoginClient<Publication>> {
        const deletedPublication = await prisma.publication.delete({
            where: {
                id
            }
        })
        return deletedPublication
    }
}

export default new PublicationRepository()