import {
  PrismaClient,
  Publication,
} from "@prisma/client";
import {
  PublicationRepositoryCreateDTO,
  PublicationRepositoryDeleteDTO,
  PublicationRepositoryFindAllPublicationOnlyQueenOrIntermediateAutonomousDTO,
  PublicationRepositoryFindAllPublicationOnlyBegginerAutonomousDTO,
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
      include: {
        interest: {
          select: {
            id: true
          }
        }
      }
    });
    return publication;
  }
  async read({
    id,
    clientId,
  }: PublicationRepositoryReadDTO): Promise<Publication[]> {
    const publications = await prisma.publication.findMany({
      where: {
        clientId
      },
      include: {
        interest: {
          include: {
            autonomous: {
              select: {
                id: true,
                name: true,
                login: true
              }
            }
          }
        }
      }
    })

    return publications
  }
  async findPublicationById({
    id,
    clientId
  }: PublicationRepositoryFindPublicationByIdDTO): Promise<Publication | null> {
    const publication = await prisma.publication.findUnique({
      where: {
        id
      },
      include: {
        interest: {
          include: {
            autonomous: {
              select: {
                id: true
              }
            }
          }
        }
      }
    })
    return publication;
  }
  async findAllPublicationOnlyQueenOrIntermediateAutonomous({servTypeId}: PublicationRepositoryFindAllPublicationOnlyQueenOrIntermediateAutonomousDTO): Promise<Publication[]> {
    const publication = await prisma.publication.findMany({
      where: {
        servTypeId,
        type: 'Queen'
      },
      include: {
        interest: {
          include: {
            autonomous: {
              select: {
                id: true
              }
            }
          }
        }
      }
    })
    return publication;
  }

  async findAllPublicationOnlyBegginerAutonomous({servTypeId}: PublicationRepositoryFindAllPublicationOnlyBegginerAutonomousDTO): Promise<Publication[]> {
    const publication = await prisma.publication.findMany({
      where: {
        servTypeId,
        type: 'Beginner'
      },
      include: {
        interest: {
          include: {
            autonomous: {
              select: {
                id: true
              }
            }
          }
        }
      }
    })
    return publication;
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
        id
      },
    });
    return deletedPublication;
  }
}

export default new PublicationRepository();
