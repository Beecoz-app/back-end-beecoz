import { Publication } from "@prisma/client";

export interface PublicationRepositoryCreateDTO {
    data: Omit<Publication, 'id' | 'created_at' | 'updated_at'>
}
export interface PublicationRepositoryUpdateDTO {
    id: number;
    data: Omit<Publication, 'id' | 'created_at' | 'updated_at'>
}
export interface PublicationRepositoryDeleteDTO {
    id: number
}