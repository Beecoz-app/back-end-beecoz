import { Publication } from "@prisma/client";

export interface CreateDTO {
    data: Omit<Publication, 'id' | 'created_at' | 'updated_at'>
}
export interface UpdateDTO {
    id: number;
    data: Omit<Publication, 'id' | 'created_at' | 'updated_at'>
}
export interface DeleteDTO {
    id: number
}