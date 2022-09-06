import { Client } from "@prisma/client";

export interface CreateDTO {
    data: Omit<Client, 'id' | 'created_at' | 'updated_at'>
}
export interface UpdateDTO {
    id: number;
    data: Omit<Client, 'id' | 'created_at' | 'updated_at'>
}
export interface DeleteDTO {
    id: number
}