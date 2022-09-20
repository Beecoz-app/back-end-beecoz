import { Client } from "@prisma/client";

export interface ClientRepositoryCreateDTO {
    data: Omit<Client, 'id' | 'created_at' | 'updated_at'>
}
export interface ClientRepositoryUpdateDTO {
    id: number;
    data: Omit<Client, 'id' | 'created_at' | 'updated_at' | 'gender' | 'cpf' | 'bornDate' | 'profileId' | 'typeId' >
}
export interface ClientRepositoryDeleteDTO {
    id: number
}
export interface ClientRepositoryFindClientByIdDTO {
    id: number;
}
export interface ClientRepositoryFindClientByLoginDTO {
    login: number
}
