import { Service } from "@prisma/client";

export interface CreateDTO {
    data: Omit<Service, 'id' | 'created_at' | 'updated_at'>
}
export interface UpdateDTO {
    id: number;
    data: Omit<Service, 'id' | 'created_at' | 'updated_at'>
}
export interface DeleteDTO {
    id: number
}