import { Work } from "@prisma/client";

export interface WorkRepositoryCreateDTO {
    data: Omit<Work, 'id' | 'created_at' | 'updated_at'>
}
export interface WorkRepositoryUpdateDTO {
    id: number;
    data: Omit<Work, 'id' | 'created_at' | 'updated_at'>
}
export interface WorkRepositoryDeleteDTO {
    id: number
}