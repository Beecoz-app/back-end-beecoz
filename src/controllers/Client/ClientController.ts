import { Client } from "@prisma/client";
import { Request, Response } from "express";
import ClientProfileRepository from "../../repositories/Client/ClientProfile/ClientProfileRepository";
import ClientRepository from "../../repositories/Client/ClientRepository";
import LoginRepository from "../../repositories/Login/LoginRepository";
import TypeUserRepository from "../../repositories/TypeUser/TypeUserRepository";
import { clientAuthRoutes } from "../../routes/Auth/Client/clientAuthRoutes";
import { isSomeEmpty } from "../../utils/isSomeEmpty"

clientAuthRoutes.post("/create", async (req: Request, res: Response) => {
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
    }: Client & { email: string; password: string, cellNumber: number | null, biography: string} = req.body;
  
    const login = await LoginRepository.create({ data: {email, password, cellNumber} });
    const profile = await ClientProfileRepository.create({data: {biography}})
    const typeId = await TypeUserRepository.findByLevel({level: gender === 'Female' ? 'Queen' : 'Beginner'})
    
  
    const client = await ClientRepository.create({data: {name, lastName,gender, bornDate, cpf, loginId: login.id, profileId: profile.id, typeId}})
  
    const someFieldIsEmpty = isSomeEmpty ([
      name,
      email,
      password,
      cellNumber,
      lastName,
      gender,
      bornDate,
      cpf,
      biography
    ])

    if (someFieldIsEmpty) {
        return res.status(400).json({
          message: 'Fields were not filled in correctly.',
          client: null,
        });
      }

    const emailExists = await LoginRepository.findByEmail ({ email });
    if (emailExists) {
      return res.status(400).json({ 
        message: 'Email is already in use.', 
        client: null 
      });
    }

    return res.json({client})
  });