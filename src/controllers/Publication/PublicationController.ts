// import {Publication} from "@prisma/client"
// import {Request, Response} from "express"
// import PublicationRepository from "../../repositories/Publication/PublicationRepository"
// import ClientRepository from "../../repositories/Client/ClientRepository";
// import ServiceTypeRepository from "../../repositories/ServiceType/ServiceTypeRepository";


// class PublicationController {
//     async create(req: Request, res: Response) {
//         const { 
//             title, 
//             description, 
//             data, 
//             region, 
//             name, 
//             servtypes 
//         }: Publication & { name: string, servtypes: string } = req.body;

//         const service = await ServiceTypeRepository.findServiceTypeById({ id: number });
//         const clientId = await ClientRepository.findClientById({ name });

//         const publication = PublicationRepository.create({ data: { title, description, data, region, servtypes, name, clientId: clientId.id, serviceId: serviceId.id } });

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
