import { Autonomous } from "@prisma/client";

export interface AutonomousRepositoryCreateDTO {
    data: Omit<Autonomous, 'id' | 'created_at' | 'updated_at'>
}
export interface AutonomousRepositoryUpdateDTO {
    id: number;
    data: Omit<Autonomous, 'id' | 'created_at' | 'updated_at'>
}
export interface AutonomousRepositoryDeleteDTO {
    id: number
}