import { Rating } from "@prisma/client";

export interface CreateDTO {
    data: Omit<Rating, 'id' | 'created_at' | 'updated_at'>
}
export interface UpdateDTO {
    id: number;
    data: Omit<Rating, 'id' | 'created_at' | 'updated_at'>
}
export interface DeleteDTO {
    id: number
}