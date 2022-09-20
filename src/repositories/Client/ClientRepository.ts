import { PrismaClient, Client, PrismaPromise, Prisma } from "@prisma/client";
import {
  ClientRepositoryCreateDTO,
  ClientRepositoryDeleteDTO,
  ClientRepositoryFindClientByIdDTO,
  ClientRepositoryFindClientByLoginDTO,
  ClientRepositoryUpdateDTO,
} from "../../interfaces/DTOs/repositories/Client/ClientRepositoryDTO";
import { IClientRepository } from "../../interfaces/repositories/Client/IClientRepository";
const prisma = new PrismaClient();

class ClientRepository implements IClientRepository {
  async create({ data }: ClientRepositoryCreateDTO): Promise<Client> {
    const client = await prisma.client.create({
      data: {
        ...data,
      },
    });
    return client;
  }
  async read(): Promise<PrismaPromise<Client[]>> {
    const clients = await prisma.client.findMany();
    return clients;
  }
  async update({ id, data }: ClientRepositoryUpdateDTO): Promise<Client> {
    const newClient = await prisma.client.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return newClient;
  }
  
  async delete({ id }: ClientRepositoryDeleteDTO): Promise<Client> {
    const deletedClient = await prisma.client.delete({
      where: {
        id,
      },
    });
    return deletedClient;
  }
  async findClientById({
    id,
  }: ClientRepositoryFindClientByIdDTO): Promise<Client | null> {
    const client = await prisma.client.findUnique({
      where: {
        id,
      },
    });
    return client;
  }
  async findClientByLogin({ login }: ClientRepositoryFindClientByLoginDTO): Promise<Client | null> {
    const client = await prisma.client.findUnique({
      where: {
        login,
      },
    });
    return client;
  }
}

export default new ClientRepository();
