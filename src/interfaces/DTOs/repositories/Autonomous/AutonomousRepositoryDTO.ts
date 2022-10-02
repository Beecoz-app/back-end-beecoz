import { Autonomous, AutonomousProfile } from "@prisma/client";

export interface AutonomousRepositoryCreateDTO {
    data: {
        autonomousData: Omit<Autonomous, 'id' | 'created_at' | 'updated_at'>
        serviceData: number
    };
}
export interface AutonomousRepositoryUpdateDTO {
    id: number;
    data: {
        autonomousData: Pick<Autonomous, 'name' | 'lastName' | 'login' | 'password'>
        serviceData: number,
        profileData: Pick<AutonomousProfile, 'biography'>
    };
}
export interface AutonomousRepositoryDeleteDTO {
    id: number
}
export interface AutonomousRepositoryFindAutonomousByIdDTO {
    id: number;
}
export interface AutonomousRepositoryFindAutonomousByLoginDTO {
    login: string;
}

export interface AutonomousRepositoryUpdatePasswordDTO {
    id: number;
    password: string;
}