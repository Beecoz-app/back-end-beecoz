import { Login } from "@prisma/client";
import { Request, Response } from "express";
import LoginRepository from "../../repositories/Login/LoginRepository";
class AuthLoginController {
    async create(req: Request, res: Response) {
        const { email, password, cellNumber }: Login = req.body;

        const login = await LoginRepository.create({ data: { email, password, cellNumber } });
    
        return res.json({ login });
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { email, password, cellNumber }: Login = req.body;
        const parsedId = Number( id )

        const login = await LoginRepository.update({ id: parsedId, data: { email, password, cellNumber } });
        
    
        return res.json({ login });
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const parsedId = Number(id);
    
        const login = await LoginRepository.delete({ id: parsedId });
    
        return res.json({ login });
    }
    
   async read (req: Request, res: Response) {

        const login = await LoginRepository.read();
    
        return res.json({ login });
    }

    async readById (req: Request, res:Response) {
        const { id } = req.params;
        const parsedId = Number(id);

        const login = await LoginRepository.findLoginById({ id: parsedId });

        return res.json({ login });

    }
}

export default new AuthLoginController();

