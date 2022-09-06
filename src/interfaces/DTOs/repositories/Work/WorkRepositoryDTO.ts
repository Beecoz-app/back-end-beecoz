import { Work } from "@prisma/client";

export interface CreateDTO {
    data: Omit<Work, 'id' | 'created_at' | 'updated_at'>
}
export interface UpdateDTO {
    id: number;
    data: Omit<Work, 'id' | 'created_at' | 'updated_at'>
}
export interface DeleteDTO {
    id: number
}