// import {Publication} from "@prisma/client"
// import {Request, Response} from "express"
// import PublicationRepository from "../../repositories/Publication/PublicationRepository"
// import ClientRepository from "../../repositories/Client/ClientRepository";
// import ServiceTypeRepository from "../../repositories/ServiceType/ServiceTypeRepository";
// import { serviceTypeRoutes } from "../../routes/ServiceType/serviceTypeRoutes";


// class PublicationController {
//     async create(req: Request, res: Response) {
//         const { 
//             title, 
//             description, 
//             data, 
//             region, 
//             name, 
//             servTypes 
//         }: Publication & { name: string, servTypes: string } = req.body;

//         const service = await ServiceTypeRepository.create({ data: { servTypes} });
//         const client = await ClientRepository.create({ data: { name } });

//         const publication = PublicationRepository.create({ data: { title, description, data, region, servTypes, name, clientId: clientId.id, serviceTypeId:  } });

//         return res.json({ publication });
//     }

        

//     async update(req: Request, res: Response) {
//         const { id } = req.params;
//         const { title, description, data, region }: Publication = req.body;
//         const parsedId = Number( id )

//         const publication = await PublicationRepository.update({ id: parsedId, data: { title, description, data, region} });
        
//         return res.json({ publication });
//     }

//     async delete(req: Request, res: Response) {
//         const { id } = req.params;
//         const parsedId = Number(id);
    
//         const publication = await PublicationRepository.delete({ id: parsedId });
    
//         return res.json({ publication });
//     }
    
//    async read (req: Request, res: Response) {

//         const publication = await PublicationRepository.read();
    
//         return res.json({ publication });
//     }

//     async readById (req: Request, res:Response) {
//         const { id } = req.params;
//         const parsedId = Number(id);

//         const publication = await PublicationRepository.findPublicationById({ id: parsedId });

//         return res.json({ publication });

//     }
// }

// export default new PublicationController();
