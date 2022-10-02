import { Prisma, PrismaPromise, ServiceType } from "@prisma/client";
import {
  ServiceTypeRepositoryCreateDTO,
  ServiceTypeRepositoryUpdateDTO,
  ServiceTypeRepositoryDeleteDTO,
  ServiceTypeRepositoryFindServiceTypeByIdDTO,
} from "../../DTOs/repositories/ServiceType/ServiceTypeRepositoryDTO";

export interface IServiceTypeRepository {
  create({ data }: ServiceTypeRepositoryCreateDTO): Promise<ServiceType>;
  read(): Promise<
    {
      id: number;
      name: string;
    }[]
  >;
  findServiceTypeById({
    id,
  }: ServiceTypeRepositoryFindServiceTypeByIdDTO): Promise<{
    id: number;
    name: string;
  } | null>;
  update({ id, data }: ServiceTypeRepositoryUpdateDTO): Promise<ServiceType>;
  delete({ id }: ServiceTypeRepositoryDeleteDTO): Promise<ServiceType>;
}
