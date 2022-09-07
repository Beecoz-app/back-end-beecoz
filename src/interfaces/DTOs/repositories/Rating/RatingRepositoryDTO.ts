import { Rating } from "@prisma/client";

export interface RatingRepositoryCreateDTO {
    data: Omit<Rating, 'id' | 'created_at' | 'updated_at'>
}
export interface RatingRepositoryUpdateDTO {
    id: number;
    data: Omit<Rating, 'id' | 'created_at' | 'updated_at'>
}
export interface RatingRepositoryDeleteDTO {
    id: number
}

export interface RatingRepositoryFindRatingByIdDTO {
    id: number
}
