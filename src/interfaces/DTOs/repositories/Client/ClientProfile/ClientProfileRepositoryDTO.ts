import { ClientProfile } from "@prisma/client";

export interface ClientProfileRepositoryCreateDTO {
    data: Omit<ClientProfile, 'id' | 'created_at' | 'updated_at'>
}
export interface ClientProfileRepositoryUpdateDTO {
    id: number;
    data: Omit<ClientProfile, 'id' | 'created_at' | 'updated_at'>
}
export interface ClientProfileRepositoryDeleteDTO {
    id: number
}

export interface ClientProfileRepositoryFindClientProfileByIdDTO {
    id: number
}
