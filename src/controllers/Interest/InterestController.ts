import { json, Request, Response } from 'express';
import InterestRepository from '../../repositories/Interest/InterestRepository';

class InterestController {

    async join(req: Request, res: Response) {
        const {idAutonomous, idPublication} = req.params

        const interestExists = await InterestRepository.readByAutonomous(Number(idPublication),Number(idAutonomous))

        if (interestExists.length > 0) return res.status(400).json('Autonomous already join on this interest!')

        const interest = await InterestRepository.create({ data: { publicationId: Number(idPublication), autonomousId: Number(idAutonomous) } });
        
        return res.json({ interest });
    }

    async exit(req: Request, res: Response) {
        const {idAutonomous, idPublication, idInterest} = req.params

        const interestExists = await InterestRepository.readByAutonomous(Number(idPublication),Number(idAutonomous))


        if (!(interestExists.length > 0)) return res.status(400).json('Autonomous not enter ')

        const interest = await InterestRepository.delete({ id: Number(idInterest) });
        
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