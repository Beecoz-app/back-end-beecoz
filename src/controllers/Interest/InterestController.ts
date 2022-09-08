import { Interest } from "@prisma/client";
import { Request, Response } from 'express';
import InterestRepository from '../../repositories/Interest/InterestRepository';
import AutonomousRepository from "../../repositories/Autonomous/AutonomousRepository";

class InterestController {

    // async create(req: Request, res: Response) {
    //     const {  }: Interest = req.body;

    //     const 
    //     const interest = await InterestRepository.create({ data: { name, description } });

    //     return res.json({ interest });
    // }
    
    // async update(req: Request, res: Response) {
    //     const { id } = req.params;
    //     const { name, description }: Interest = req.body;
    //     const parsedId = Number( id )

    //     const interest = await InterestRepository.update({ id: parsedId, data: { name, description } });
        
    //     return res.json({ interest });
    // }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const parsedId = Number(id);
    
        const interest = await InterestRepository.delete({ id: parsedId });
    
        return res.json({ interest });
    }
    
   async read (req: Request, res: Response) {

        const interest = await InterestRepository.read();
    
        return res.json({ interest });
    }

    async readById (req: Request, res:Response) {
        const { id } = req.params;
        const parsedId = Number(id);

        const interest = await InterestRepository.findInterestById({ id: parsedId });

        return res.json({ interest });

    }
}

export default new InterestController();