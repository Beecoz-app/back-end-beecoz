import { PrismaClient ,AutonomousProfile, PrismaPromise, Prisma } from "@prisma/client";
import { AutonomousProfileRepositoryCreateDTO, AutonomousProfileRepositoryDeleteDTO, AutonomousProfileRepositoryFindAutonomousProfileByIdDTO, AutonomousProfileRepositoryUpdateDTO } from "../../../interfaces/DTOs/repositories/Autonomous/AutonomousProfile/AutonomousProfileRepostoryDTO";
import { IAutonomousProfileRepository } from "../../../interfaces/repositories/Autonomous/AutonomousProfile/IAutonomousProfile";
const prisma = new PrismaClient()

interface CreateDTO {
    data: AutonomousProfile
}
interface UpdateDTO {
    id: number;
    data: AutonomousProfile
}
interface DeleteDTO {
    id: number
}

class AutonomousProfilesRepository implements IAutonomousProfileRepository{
    
    async findAutonomousProfileById({ id }: AutonomousProfileRepositoryFindAutonomousProfileByIdDTO): Promise<AutonomousProfile | null> {
        const autonomousProfileId = await prisma.autonomousProfile.findUnique({
            where: {
                id,
            }
        });
            return autonomousProfileId;
    }

    async create({data}: AutonomousProfileRepositoryCreateDTO): Promise<AutonomousProfile> {
        const autonomousProfile = await prisma.autonomousProfile.create({
            data: {
                ...data
            }
        })
        return autonomousProfile
    }
    async read(): Promise<PrismaPromise<AutonomousProfile[]>> {
        const autonomousProfiles = await prisma.autonomousProfile.findMany()
        return autonomousProfiles

    }
    async update({id, data}: AutonomousProfileRepositoryUpdateDTO): Promise<AutonomousProfile> {
        const newAutonomousProfiles = await prisma.autonomousProfile.update({
            where: {
                id
            },
            data: {
                ...data
            }
        })
        return newAutonomousProfiles
    }
    async delete({id}: AutonomousProfileRepositoryDeleteDTO): Promise<AutonomousProfile> {
        const deletedAutonomousProfile = await prisma.autonomousProfile.delete({
            where: {
                id
            }
        })
        return deletedAutonomousProfile
    }
}

export default new AutonomousProfilesRepository()