import {
  PrismaClient,
  Publication,
  PrismaPromise,
} from "@prisma/client";
import {
  PublicationRepositoryCreateDTO,
  PublicationRepositoryDeleteDTO,
  PublicationRepositoryFindPublicationByIdDTO,
  PublicationRepositoryReadDTO,
  PublicationRepositoryUpdateDTO,
} from "../../interfaces/DTOs/repositories/Publication/PublicationRepositoryDTO";
import { IPublicationRepository } from "../../interfaces/repositories/Publication/IPublicationRepository";
const prisma = new PrismaClient();

class PublicationRepository implements IPublicationRepository {
  async create({ data }: PublicationRepositoryCreateDTO): Promise<Publication> {
    const publication = await prisma.publication.create({
      data: {
        ...data,
      },
    });
    return publication;
  }
  async read({
    clientId,
  }: PublicationRepositoryReadDTO): Promise<PrismaPromise<Publication[]>> {
    const publications = await prisma.publication.findMany({
      where: {
        clientId,
      },
    });

    return publications;
  }
  async findPublicationById({
    id,
  }: PublicationRepositoryFindPublicationByIdDTO): Promise<Publication | null> {
    const publicationId = await prisma.publication.findUnique({
      where: {
        id,
      },
    });
    return publicationId;
  }
  async update({
    id,
    data,
  }: PublicationRepositoryUpdateDTO): Promise<Publication> {
    const newPublication = await prisma.publication.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return newPublication;
  }
  async delete({ id }: PublicationRepositoryDeleteDTO): Promise<Publication> {
    const deletedPublication = await prisma.publication.delete({
      where: {
        id,
      },
    });
    return deletedPublication;
  }
}

export default new PublicationRepository();
