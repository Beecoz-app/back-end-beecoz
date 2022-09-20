import { AutonomousProfile } from "@prisma/client";
import { Request, Response } from "express";
import AutonomousProfileRepository from "../../../../repositories/Autonomous/AutonomousProfile/AutonomousProfileRepository";

class AutonomousProfileController {
    
        async create(req: Request, res: Response) {
            const { biography }: AutonomousProfile = req.body;
    
            const autonomousProfile = await AutonomousProfileRepository.create({ data: { biography } });

            return res.json({ autonomousProfile });
        }
    
        async update(req: Request, res: Response) {
            const { id } = req.params;
            const { biography }: AutonomousProfile = req.body;
            const parsedId = Number(id);
    
            const autonomousProfile = await AutonomousProfileRepository.update({ id: parsedId, data: { biography } });
    
            return res.json({ autonomousProfile });
        }
    
        async delete(req: Request, res: Response) {
            const { id } = req.params;
            const parsedId = Number(id);
    
            const autonomousProfile = await AutonomousProfileRepository.delete({ id: parsedId });
    
            return res.json({ autonomousProfile });
        }
    
        async read(req: Request, res: Response) {
            const autonomousProfile = await AutonomousProfileRepository.read();
    
            return res.json({ autonomousProfile });
        }

        async readById(req: Request, res: Response) {
            const { id } = req.params;
            const parsedId = Number(id);
    
            const autonomousProfile = await AutonomousProfileRepository.findAutonomousProfileById({ id: parsedId });
    
            return res.json({ autonomousProfile });
        }

    }

    export default new AutonomousProfileController();
    