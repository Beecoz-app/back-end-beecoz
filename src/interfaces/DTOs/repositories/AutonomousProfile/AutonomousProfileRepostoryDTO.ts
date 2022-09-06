import { AutonomousProfile } from "@prisma/client";

export interface CreateDTO {
    data: Omit<AutonomousProfile, 'id' | 'created_at' | 'updated_at'>
}
export interface UpdateDTO {
    id: number;
    data: Omit<AutonomousProfile, 'id' | 'created_at' | 'updated_at'>
}
export interface DeleteDTO {
    id: number
}
