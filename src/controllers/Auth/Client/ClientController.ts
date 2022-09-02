import { Client } from "@prisma/client";
import { Request, Response } from "express";
import ClientProfileRepository from "../../../repositories/Client/ClientProfile/ClientProfileRepository";
import ClientRepository from "../../../repositories/Client/ClientRepository";
import LoginRepository from "../../../repositories/Login/LoginRepository";
import TypeUserRepository from "../../../repositories/TypeUser/TypeUserRepository";
import { isSomeEmpty } from "../../../utils/isSomeEmpty"

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

    const login = await LoginRepository.create({ data: { email, password, cellNumber } });
    const profile = await ClientProfileRepository.create({ data: { biography } })
    const typeId = await TypeUserRepository.findByLevel({ level: gender === 'Female' ? 'Queen' : 'Beginner' })


    const client = await ClientRepository.create({ data: { name, lastName, gender, bornDate: new Date(bornDate), cpf, loginId: login.id, profileId: profile.id, typeId } })

    return res.json({ client })
  };

}

export default new AuthClientController()