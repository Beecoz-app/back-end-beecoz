import { ClientProfile } from "@prisma/client";

export interface CreateDTO {
    data: Omit<ClientProfile, 'id' | 'created_at' | 'updated_at'>
}
export interface UpdateDTO {
    id: number;
    data: Omit<ClientProfile, 'id' | 'created_at' | 'updated_at'>
}
export interface DeleteDTO {
    id: number
}