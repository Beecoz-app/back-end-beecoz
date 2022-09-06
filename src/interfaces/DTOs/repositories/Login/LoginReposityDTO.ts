import { Login } from "@prisma/client";

export interface CreateDTO {
    data: Omit<Login, 'id' | 'created_at' | 'updated_at'>
}
export interface UpdateDTO {
    id: number;
    data: Omit<Login, 'id' | 'created_at' | 'updated_at'>
}
export interface UpdatePassword {
    id: number;
    password: string;
}
export interface DeleteDTO {
    id: number
}