import { PrismaClient ,Publication, Prisma, PrismaPromise } from "@prisma/client";
import { PublicationRepositoryCreateDTO, PublicationRepositoryDeleteDTO, PublicationRepositoryFindPublicationByIdDTO, PublicationRepositoryUpdateDTO } from "../../interfaces/DTOs/repositories/Publication/PublicationRepositoryDTO";
import { IPublicationRepository } from "../../interfaces/repositories/Publication/IPublicationRepository";
const prisma = new PrismaClient()

class PublicationRepository implements IPublicationRepository{

    async findPublicationById({ id }: PublicationRepositoryFindPublicationByIdDTO): Promise<Publication | null> {
        const publicationId = await prisma.publication.findUnique({
            where:{
              id,
            }
          })
          return publicationId;
        }

    async create({data}: PublicationRepositoryCreateDTO): Promise<Publication> {
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
    async update({id, data}: PublicationRepositoryUpdateDTO): Promise<Prisma.Prisma__LoginClient<Publication>> {
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
    async delete({id}: PublicationRepositoryDeleteDTO): Promise<Prisma.Prisma__LoginClient<Publication>> {
        const deletedPublication = await prisma.publication.delete({
            where: {
                id
            }
        })
        return deletedPublication
    }
}

export default new PublicationRepository()