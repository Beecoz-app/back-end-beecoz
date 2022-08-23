import { PrismaClient ,AutonomousProfile, PrismaPromise, Prisma } from "@prisma/client";
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

class AutonomousProfilesRepository {
    async create({data}: CreateDTO): Promise<AutonomousProfile> {
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
    async update({id, data}: UpdateDTO): Promise<Prisma.Prisma__LoginClient<AutonomousProfile>> {
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
    async delete({id}: DeleteDTO): Promise<Prisma.Prisma__LoginClient<AutonomousProfile>> {
        const deletedAutonomousProfile = await prisma.autonomousProfile.delete({
            where: {
                id
            }
        })
        return deletedAutonomousProfile
    }
}

export default new AutonomousProfilesRepository()