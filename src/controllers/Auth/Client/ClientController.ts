import { Client } from "@prisma/client";
import { Request, Response } from "express";
import ClientProfileRepository from "../../../repositories/Client/ClientProfile/ClientProfileRepository";
import ClientRepository from "../../../repositories/Client/ClientRepository";
import LoginRepository from "../../../repositories/Login/LoginRepository";
import TypeUserRepository from "../../../repositories/TypeUser/TypeUserRepository";
import { hashPassword} from "../../../utils/password";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class AuthClientController {
  async register(req: Request, res: Response) {
    const {
      name,
      email,
      password,
      cellNumber,
      lastName,
      gender,
      bornDate,
      cpf,
      biography
    }: Client & { email: string; password: string, cellNumber: number | null, biography: string } = req.body;
      

    const login = await LoginRepository.create({ data: { email, password: await hashPassword(password), cellNumber } });
    const profile = await ClientProfileRepository.create({ data: { biography } })
    const typeId = await TypeUserRepository.findByLevel({ level: gender === 'Female' ? 'Queen' : 'Beginner' })


    const client = await ClientRepository.create({ data: { name, lastName, gender, bornDate: new Date(bornDate), cpf, loginId: login.id, profileId: profile.id, typeId } })

    const token = jwt.sign({ id: client.id }, String(process.env.AUTH_SECRET), {
      expiresIn: 86400,
    });
    

    return res.json({ client, token })
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);
    
    const clientExists = await ClientRepository.findClientById({ id: parsedId });
    if (!clientExists) {
      return res.status(400).json({ message: "Client not found" });
    }
  
    await ClientRepository.delete({ id: parsedId });

    return res
      .status(200)
      .json({ message: "Client deleted successfully" });
  }

  async updatePassword(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);
    const { newPassword } = req.body;

    const clientExists = await ClientRepository.findClientById({ id: parsedId });
    if (!clientExists) {
      return res.status(400).json({ message: "Client not found" });
    }

    const brandNewPassword = await LoginRepository.updatePassword({ id: clientExists.loginId, password: await hashPassword(newPassword) });
    
    
    return res.status(200).json({ brandNewPassword });
  }

  async login (req: Request, res: Response) {
    const { email, password } = req.body;

    const client = await LoginRepository.findByEmail({ email });
    if (!client) {
      return res.status(400).json({ message: "Client not found" });
    }

    if (!await bcrypt.compare(password, client.password)) {
      return res.status(400).json({ message: "Incorrect password" });
    }
  
    const token = jwt.sign({ id: client.id }, String(process.env.AUTH_SECRET), {
      expiresIn: 86400,
    });


    return res.status(200).json({ client, token });
  }
}


export default new AuthClientController();
