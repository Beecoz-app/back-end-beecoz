import { AutonomousProfile } from "@prisma/client";

export interface AutonomousProfileRepositoryCreateDTO {
    data: Omit<AutonomousProfile, 'id' | 'created_at' | 'updated_at'>
}
export interface AutonomousProfileRepositoryUpdateDTO {
    id: number;
    data: Omit<AutonomousProfile, 'id' | 'created_at' | 'updated_at'>
}
export interface AutonomousProfileRepositoryDeleteDTO {
    id: number
}
