import { ServiceType } from "@prisma/client";

export interface ServiceTypeRepositoryCreateDTO {
    data: Omit<ServiceType, 'id' | 'created_at' | 'udpated_at'>
}
export interface ServiceTypeRepositoryUpdateDTO {
    id: number;
    data: Omit<ServiceType, 'id' | 'created_at' | 'udpated_at'>
}
export interface ServiceTypeRepositoryDeleteDTO {
    id: number
}