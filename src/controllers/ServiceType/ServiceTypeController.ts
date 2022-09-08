import { ServiceType } from "@prisma/client";
import { Request, Response } from "express";
import ServiceTypeRepository from "../../repositories/ServiceType/ServiceTypeRepository";

class ServiceTypeController {
    async create(req: Request, res: Response) {
        const {servTypes}: ServiceType = req.body;

        const serviceType = await ServiceTypeRepository.create({ data: { servTypes } });
    
        return res.json({ serviceType });
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { servTypes }: ServiceType = req.body;
        const parsedId = Number( id )

        const serviceType = await ServiceTypeRepository.update({ id: parsedId, data: { servTypes } });
        
        return res.json({ serviceType });
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const parsedId = Number(id);
    
        const serviceType = await ServiceTypeRepository.delete({ id: parsedId });
    
        return res.json({ serviceType });
    }
    
   async read (req: Request, res: Response) {

        const serviceType = await ServiceTypeRepository.read();
    
        return res.json({ serviceType });
    }
}

export default new ServiceTypeController();
    