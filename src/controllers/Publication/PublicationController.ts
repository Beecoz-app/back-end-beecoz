import {Publication} from "@prisma/client"
import {Request, Response} from "express"
import PublicationRepository from "../../repositories/Publication/PublicationRepository"
import ClientRepository from "../../repositories/Client/ClientRepository";
import ServiceTypeRepository from "../../repositories/ServiceType/ServiceTypeRepository";
import { serviceTypeRoutes } from "../../routes/ServiceType/serviceTypeRoutes";


class PublicationController {
    async create(req: Request, res: Response) {
        const {idClient, idServiceType} = req.params
        const { 
            title, 
            description, 
            data, 
            region,  
        }: Publication & {} = req.body;

        const publication = PublicationRepository.create({ data: { title, description, data, region, serviceTypeId: Number(idServiceType), clientId: Number(idClient)} });

        return res.json({ publication });
    }

        

    async update(req: Request, res: Response) {
        const { id, idClient, idServiceType } = req.params;
        const { title, description, data, region }: Publication = req.body;
        const parsedId = Number( id )



        const publication = await PublicationRepository.update({ id: parsedId, data: { data, region, description, title } });
        
        return res.json({ publication });
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const parsedId = Number(id);
    
        const publication = await PublicationRepository.delete({ id: parsedId });
    
        return res.json({ publication });
    }
    
   async read (req: Request, res: Response) {

        const publication = await PublicationRepository.read();
    
        return res.json({ publication });
    }

    async readById (req: Request, res:Response) {
        const { id } = req.params;
        const parsedId = Number(id);

        const publication = await PublicationRepository.findPublicationById({ id: parsedId });

        return res.json({ publication });

    }
}

export default new PublicationController();
