import {
  PrismaClient,
  ServiceType,
  Prisma,
  PrismaPromise,
} from "@prisma/client";
import {
  ServiceTypeRepositoryCreateDTO,
  ServiceTypeRepositoryDeleteDTO,
  ServiceTypeRepositoryFindServiceTypeByIdDTO,
  ServiceTypeRepositoryUpdateDTO,
} from "../../interfaces/DTOs/repositories/ServiceType/ServiceTypeRepositoryDTO";
import { IServiceTypeRepository } from "../../interfaces/repositories/ServiceType/IServiceTypeRepository";
const prisma = new PrismaClient();

class ServiceTypeRepository implements IServiceTypeRepository {
  async create({ data }: ServiceTypeRepositoryCreateDTO): Promise<ServiceType> {
    const serviceType = await prisma.serviceType.create({
      data: {
        ...data,
      },
    });
    return serviceType;
  }
  async read(): Promise<
    {
      id: number;
      name: string;
    }[]
  > {
    const servicesTypes = await prisma.serviceType.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    return servicesTypes;
  }
  async findServiceTypeById({
    id,
  }: ServiceTypeRepositoryFindServiceTypeByIdDTO): Promise<{
    id: number;
    name: string;
} | null> {
    const serviceId = await prisma.serviceType.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true
      }
    });
    return serviceId;
  }
  async update({
    id,
    data,
  }: ServiceTypeRepositoryUpdateDTO): Promise<{
    id: number;
    name: string;
}> {
    const newServiceType = await prisma.serviceType.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
      select: {
        id: true,
        name: true
      }
    });
    return newServiceType;
  }
  async delete({ id }: ServiceTypeRepositoryDeleteDTO): Promise<ServiceType> {
    const deletedServiceType = await prisma.serviceType.delete({
      where: {
        id,
      },
    });
    return deletedServiceType;
  }
}

export default new ServiceTypeRepository();
