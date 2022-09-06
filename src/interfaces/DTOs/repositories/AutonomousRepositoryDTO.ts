import { Autonomous } from "@prisma/client";

export interface CreateDTO {
    data: Omit<Autonomous, 'id' | 'created_at' | 'updated_at'>
}
export interface UpdateDTO {
    id: number;
    data: Autonomous
}
export interface DeleteDTO {
    id: number
}