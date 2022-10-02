import { Autonomous } from "@prisma/client";
import { Request, Response } from "express";
import AutonomousRepository from "../../../repositories/Autonomous/AutonomousRepository";
import TypeUserRepository from "../../../repositories/TypeUser/TypeUserRepository";
import jwt from "jsonwebtoken";
import AutonomousProfileRepository from "../../../repositories/Autonomous/AutonomousProfile/AutonomousProfileRepository";
import { hashPassword } from "../../../utils/hashPassword";
import { generateToken } from "../../../utils/generateToken";

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

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const autonomous = await AutonomousRepository.findAutonomousById({
      id: parsedId,
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
    const parsedId = Number(id);

    const clientExists = await AutonomousRepository.findAutonomousById({
      id: parsedId,
    });
    if (!clientExists) {
      return res.status(400).json({ message: "Client not found" });
    }

    await AutonomousRepository.delete({ id: parsedId });

    return res.status(200).json({ message: "Client deleted successfully" });
  }

  async changePassword(req: Request, res: Response) {
    const { id } = req.params;
    const {
      oldPassword,
      newPassword,
    }: { oldPassword: string; newPassword: string } = req.body;
    const parsedId = Number(id);

    const autonomousExists = await AutonomousRepository.findAutonomousById({
      id: parsedId,
    });
    if (!autonomousExists) {
      return res.status(400).json({ message: "Autonomous not found" });
    }

    const passwordMatch = (await autonomousExists.password) === oldPassword;
    if (!passwordMatch) {
      return res.status(400).json({ message: "Password does not match" });
    }

    await AutonomousRepository.updatePassword({
      id: parsedId,
      password: await hashPassword(newPassword),
    });

    return res.status(200).json({ message: "Password updated" });
  }
}

export default new AuthAutonomousController();
