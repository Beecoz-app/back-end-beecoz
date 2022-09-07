import { Service } from "@prisma/client";

export interface ServiceRepositoryCreateDTO {
    data: Omit<Service, 'id' | 'created_at' | 'updated_at'>
}
export interface ServiceRepositoryUpdateDTO {
    id: number;
    data: Omit<Service, 'id' | 'created_at' | 'updated_at'>
}
export interface ServiceRepositoryDeleteDTO {
    id: number
}

export interface ServiceRepositoryFindServiceByIdDTO {
    id: number
}
