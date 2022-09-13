import { Login } from "@prisma/client";

export interface LoginRepositoryCreateDTO {
    data: Omit<Login, 'id' | 'created_at' | 'updated_at'>
}
export interface LoginRepositoryUpdateDTO {
    id: number;
    data: Omit<Login, 'id' | 'created_at' | 'updated_at'>
}
export interface LoginRepositoryUpdatePassword {
    id: number;
    password: string;
}
export interface LoginRepositoryDeleteDTO {
    id: number
}

export interface LoginRepositoryFindByIdDTO {
    id: number
}
export interface LoginRepositoryUpdateEmail {
    id: number
    email: string
}
