import { Service } from "@prisma/client";
import { Request, Response } from 'express';
import ServiceRepository from '../../repositories/Service/ServiceRepository';

class ServiceController {
    async create(req: Request, res: Response) {
        const { name, description, price }: Service = req.body;

        const service = await ServiceRepository.create({ data: { name, description, price } });
        

        return res.json({ service });
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { name, description, price }: Service = req.body;
        const parsedId = Number( id )

        const service = await ServiceRepository.update({ id: parsedId, data: { name, description, price } });
        
        return res.json({ service });
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const parsedId = Number(id);
    
        const service = await ServiceRepository.delete({ id: parsedId });
    
        return res.json({ service });
    }
    
   async read (req: Request, res: Response) {

        const service = await ServiceRepository.read();
    
        return res.json({ service });
    }

    async readById (req: Request, res:Response) {
        const { id } = req.params;
        const parsedId = Number(id);

        const service = await ServiceRepository.findServiceById({ id: parsedId });

        return res.json({ service });

    }
}