import { Interest } from "@prisma/client";

export interface InterestRepositoryCreateDTO {
    data: Omit<Interest, 'id' | 'created_at' | 'updated_at'>
}
export interface InterestRepositoryUpdateDTO {
    id: number;
    data: Omit<Interest, 'id' | 'created_at' | 'updated_at'>
}
export interface InterestRepositoryDeleteDTO {
    id: number
}

export interface InterestRepositoryFindInterestByIdDTO {
    id: number
}
