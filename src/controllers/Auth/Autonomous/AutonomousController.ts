import { Autonomous } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import AutonomousRepository from "../../../repositories/Autonomous/AutonomousRepository";
import TypeUserRepository from "../../../repositories/TypeUser/TypeUserRepository";
import AutonomousProfileRepository from "../../../repositories/Autonomous/AutonomousProfile/AutonomousProfileRepository";
import { hashPassword } from "../../../utils/hashPassword";
import { generateToken } from "../../../utils/generateToken";
import PublicationRepository from "../../../repositories/Publication/PublicationRepository";

class AuthAutonomousController {
  async register(req: Request, res: Response) {
    const {
      name,
      login,
      password,
      lastName,
      gender,
      cpf,
      biography,
      bornDate,
      cnpj,
      servTypeId,
    }: Autonomous & { biography: string; servTypeId: string } = req.body;

    const typeId = await TypeUserRepository.findByLevel({
      level: gender === "Female" ? "Queen" : "Beginner",
    });
    const profileId = await AutonomousProfileRepository.create({
      data: { biography },
    });

    const autonomous = await AutonomousRepository.create({
      data: {
        autonomousData: {
          name,
          lastName,
          bornDate: new Date(bornDate),
          cpf,
          gender,
          typeId,
          cnpj,
          profileId: profileId.id,
          login,
          password: await hashPassword(password),
        },
        serviceData: Number(servTypeId),
      },
    });

    return res.json({ autonomous, token: generateToken("id", autonomous.id) });
  }

  async findAll(req: Request, res: Response) {
    const autonomous = await AutonomousRepository.read();

    return res.json(autonomous);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;

    const autonomous = await AutonomousRepository.findAutonomousById({
      id: Number(id),
    });

    return res.json(autonomous);
  }
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const {
      name,
      login,
      password,
      lastName,
      servTypeId,
      biography,
    }: Autonomous & { servTypeId: string; biography: string } = req.body;

    const autonomousExists = await AutonomousRepository.findAutonomousById({
      id: Number(id),
    });
    if (!autonomousExists) {
      return res.status(400).json({ message: "Autonomous not found" });
    }

    const autonomous = await AutonomousRepository.update({
      id: Number(id),
      data: {
        autonomousData: {
          name,
          lastName,
          login,
          password: await hashPassword(password),
        },
        serviceData: Number(servTypeId),
        profileData: {
          biography,
        },
      },
    });

    return res.json({ autonomous });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    console.log(id);

    const clientExists = await AutonomousRepository.findAutonomousById({
      id: Number(id),
    });

    if (!clientExists) {
      return res.status(400).json({ message: "Client not found" });
    }

    await AutonomousRepository.delete({ id: Number(id) });

    return res.status(200).json({ message: "Autonomous deleted successfully" });
  }

  async changePassword(req: Request, res: Response) {
    const { id } = req.params;
    const {
      oldPassword,
      newPassword,
    }: { oldPassword: string; newPassword: string } = req.body;

    const autonomousExists = await AutonomousRepository.findAutonomousById({
      id: Number(id),
    });
    if (!autonomousExists) {
      return res.status(400).json({ message: "Autonomous not found" });
    }

    if (!(await bcrypt.compare(oldPassword, autonomousExists.password))) {
      return res.status(400).json({ message: "Password does not match" });
    }

    const password = await AutonomousRepository.updatePassword({
      id: Number(id),
      password: await hashPassword(newPassword),
    });

    return res.status(200).json({ password});
  }

  async getPublications(request: Request, response: Response) {
    const {userId} = request

    const autonomous = await AutonomousRepository.findAutonomousById({id: Number(userId)})

    if (!autonomous) return response.status(400).json({message: 'Autonomous not exists'})

    console.log(autonomous.profile.id)

    

    const publications = await PublicationRepository.findAllPublicationByServiceTypeId({servTypeId: Number(1)})

    return response.json(autonomous)

  }
}

export default new AuthAutonomousController();
