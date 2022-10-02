import { PrismaClient, Service, Prisma, PrismaPromise } from "@prisma/client";
import {
  ServiceRepositoryCreateDTO,
  ServiceRepositoryDeleteDTO,
  ServiceRepositoryFindServiceByIdDTO,
  ServiceRepositoryUpdateDTO,
} from "../../interfaces/DTOs/repositories/Service/ServiceRepositoryDTO";
import { IServiceRepository } from "../../interfaces/repositories/Service/IServiceRepository";
const prisma = new PrismaClient();

class ServiceRepository implements IServiceRepository {
  async create({ data }: ServiceRepositoryCreateDTO): Promise<Service> {
    const service = await prisma.service.create({
      data: {
        ...data,
      },
    });
    return service;
  }
  async read(): Promise<PrismaPromise<Service[]>> {
    const services = await prisma.service.findMany();
    return services;
  }
  async findServiceById({
    id,
  }: ServiceRepositoryFindServiceByIdDTO): Promise<Service | null> {
    const serviceId = await prisma.service.findUnique({
      where: {
        id,
      },
    });
    return serviceId;
  }
  async update({ id, data }: ServiceRepositoryUpdateDTO): Promise<Service> {
    const newService = await prisma.service.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return newService;
  }
  async delete({ id }: ServiceRepositoryDeleteDTO): Promise<Service> {
    const deletedService = await prisma.service.delete({
      where: {
        id,
      },
    });
    return deletedService;
  }
}

export default new ServiceRepository();
