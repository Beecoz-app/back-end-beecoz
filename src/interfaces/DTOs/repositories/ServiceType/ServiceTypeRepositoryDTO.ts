import { ServiceType } from "@prisma/client";

export interface CreateDTO {
    data: Omit<ServiceType, 'id' | 'created_at' | 'udpated_at'>
}
export interface UpdateDTO {
    id: number;
    data: Omit<ServiceType, 'id' | 'created_at' | 'udpated_at'>
}
export interface DeleteDTO {
    id: number
}