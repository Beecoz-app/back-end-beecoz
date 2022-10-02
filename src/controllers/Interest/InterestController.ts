import { Request, Response } from 'express';
import InterestRepository from '../../repositories/Interest/InterestRepository';

class InterestController {

    async create(req: Request, res: Response) {
        const {idAutonomous, idPublication} = req.params

        const interest = await InterestRepository.create({ data: { publicationId: Number(idPublication), autonomousId: Number(idAutonomous) } });
        
        return res.json({ interest });
    }

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