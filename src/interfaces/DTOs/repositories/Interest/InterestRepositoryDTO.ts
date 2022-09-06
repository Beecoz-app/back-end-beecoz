import { Interest } from "@prisma/client";

export interface CreateDTO {
    data: Omit<Interest, 'id' | 'created_at' | 'updated_at'>
}
export interface UpdateDTO {
    id: number;
    data: Omit<Interest, 'id' | 'created_at' | 'updated_at'>
}
export interface DeleteDTO {
    id: number
}