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
    id,
    clientId,
  }: PublicationRepositoryReadDTO): Promise<PrismaPromise<Publication[]>> {
    const publications = await prisma.publication.findMany({
      where: {
        id,
        clientId,
      },
    });

    return publications;
  }
  async findPublicationById({
    id,
    clientId
  }: PublicationRepositoryFindPublicationByIdDTO): Promise<Publication | null> {
    const publicationId = await prisma.publication.findUnique({
      where: {
        id,
        clientId
      },
    });
    return publicationId;
  }
  async update({
    id,
    clientId,
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
  async delete({ id, clientId }: PublicationRepositoryDeleteDTO): Promise<Publication> {
    const deletedPublication = await prisma.publication.delete({
      where: {
        id,
        clientId,
      },
    });
    return deletedPublication;
  }
}

export default new PublicationRepository();
