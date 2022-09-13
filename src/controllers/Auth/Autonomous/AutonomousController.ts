import { Autonomous } from "@prisma/client";
import { Request, Response } from "express";
import AutonomousRepository from "../../../repositories/Autonomous/AutonomousRepository";
import LoginRepository from "../../../repositories/Login/LoginRepository";
import TypeUserRepository from "../../../repositories/TypeUser/TypeUserRepository";
import { hashPassword} from "../../../utils/password";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AutonomousProfileRepository from "../../../repositories/Autonomous/AutonomousProfile/AutonomousProfileRepository";

class AuthAutonomousController {
    async register(req: Request, res: Response) {
        const {
        name,
        email,
        password,
        cellNumber,
        lastName,
        gender,
        cpf,
        biography,
        bornDate,
        cnpj
        }: Autonomous & { email: string; password: string, cellNumber: number | null, biography: string } = req.body;

        const login = await LoginRepository.create({ data: { email, password: await hashPassword(password), cellNumber } });
        const typeId = await TypeUserRepository.findByLevel({ level: gender  === 'Female' ? 'Queen' : 'Beginner' })
        const profileId = await AutonomousProfileRepository.create({ data: { biography } })
        
        const autonomous = await AutonomousRepository.create({ data: { name, lastName, bornDate: new Date(bornDate), cpf, gender, loginId: login.id, typeId, cnpj , profileId: profileId.id } })

        const token = jwt.sign({ id: autonomous.id }, String(process.env.AUTH_SECRET), {
            expiresIn: 86400,
          });

        return res.json({ autonomous, token })
    }

    async show(req: Request, res: Response) {
        const { id } = req.params;
        const parsedId = Number(id);

        const autonomous = await AutonomousRepository.findAutonomousById({ id: parsedId });

        return res.json(autonomous)
    }

    
    
    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const parsedId = Number(id);
        
        const clientExists = await AutonomousRepository.findAutonomousById({ id: parsedId });
        if (!clientExists) {
          return res.status(400).json({ message: "Client not found" });
        }
      
        await AutonomousRepository.delete({ id: parsedId });
    
        return res
          .status(200)
          .json({ message: "Client deleted successfully" });
      }
    
      async update(req: Request, res: Response) {
        const { id } = req.params;
        const {
          name,
          email,
          password,
          cellNumber,
          lastName,
        }: Autonomous & { email: string; password: string, cellNumber: number | null } = req.body;
        const parsedId = Number(id);
    
        const autonomousExists = await AutonomousRepository.findAutonomousById({ id: parsedId });
        if (!autonomousExists) {
          return res.status(400).json({ message: "Autonomous not found" });
        }
    
        const login = await LoginRepository.update({ id: autonomousExists.loginId, data: { email, password: await hashPassword(password), cellNumber } });
        const autonomous = await AutonomousRepository.update({ id: parsedId, data: { name, lastName, loginId: login.id } })
    
        return res.json({ autonomous })
      }
        
      
}

export default new AuthAutonomousController();