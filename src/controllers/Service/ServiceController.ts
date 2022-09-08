// import { Service } from "@prisma/client";
// import { Request, Response } from 'express';
// import ServiceRepository from '../../repositories/Service/ServiceRepository';
// import AutonomousRepository from "../../repositories/Autonomous/AutonomousRepository";
// import ServiceTypeRepository from "../../repositories/ServiceType/ServiceTypeRepository";

// class ServiceController {
//     async create(req: Request, res: Response) {
//         const { name, servTypes }: Service & {name: string, servTypes: string} = req.body;

//         const service = await ServiceRepository.create({ data: { name, servTypes } });
        

//         return res.json({ service });
//     }

//     async update(req: Request, res: Response) {
//         const { id } = req.params;
//         const { name, servTypes }: Service & {name: string, servTypes: string}  = req.body;
//         const parsedId = Number( id )

//         const service = await ServiceRepository.update({ id: parsedId, data: { autonomous, serviceType } });
        
//         return res.json({ service });
//     }

//     async delete(req: Request, res: Response) {
//         const { id } = req.params;
//         const parsedId = Number(id);

//         const service = await ServiceRepository.delete({ id: parsedId });
    
//         return res.json({ service });
//     }
    
//    async read (req: Request, res: Response) {

//         const service = await ServiceRepository.read();
    
//         return res.json({ service });
//     }
// }

// export default new ServiceController();
