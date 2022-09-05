import { Login } from "@prisma/client";
import { Request, Response } from "express";
import LoginRepository from "../../../repositories/Login/LoginRepository";
import { isSomeEmpty } from "../../../utils/isSomeEmpty"
import { hashPassword, verifyPassword } from "../../../utils/password";
import { validateEmail } from "../../../utils/validateEmail";

class LoginController {
    async create(req: Request, res: Response) {
        const { email, password }: Login = req.body;
    
        const isEmailValid = validateEmail(email);
        const isPasswordValid = verifyPassword(password, hashPassword(password));
        const isSomeFieldEmpty = isSomeEmpty(email, password);
    
        if (!isEmailValid) {
        return res.status(400).json({ message: "Invalid email" });
        }
    
        if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid password" });
        }
    
        if (isSomeFieldEmpty) {
        return res.status(400).json({ message: "Some field is empty" });
        }
    
        const login = await LoginRepository.create({ data: { email, password } });
    
        return res.json({ login });
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { email, password }: Login = req.body;
    
        const isEmailValid = validateEmail(email);
        const isPasswordValid = verifyPassword(password, hashPassword(password));
        const isSomeFieldEmpty = isSomeEmpty(email, password);
    
        if (!isEmailValid) {
        return res.status(400).json({ message: "Invalid email" });
        }
    
        if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid password" });
        }
    
        if (isSomeFieldEmpty) {
        return res.status(400).json({ message: "Some field is empty" });
        }
    
        const login = await LoginRepository.update({ where: { id }, data: { email, password } });
    
        return res.json({ login });
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
    
        const login = await LoginRepository.delete({ where: { id } });
    
        return res.json({ login });
    }
    
   async read (req: Request, res: Response) {
        const { id } = req.params;
    
        const login = await LoginRepository.read({ where: { id } });
    
        return res.json({ login });
    }
}

