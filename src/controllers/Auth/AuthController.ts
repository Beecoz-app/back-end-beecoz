import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ClientRepository from "../../repositories/Client/ClientRepository";
import AutonomousRepository from "../../repositories/Autonomous/AutonomousRepository";
import { generateToken } from "../../utils/generateToken";

class AuthController {
  async login(req: Request, res: Response) {
    const {
      login,
      password,
      type,
    }: { login: string; password: string; type: "Client" | "Autonomous" } =
      req.body;


    if (type === "Client") {
      const clientExists = await ClientRepository.findClientByLogin({ login });

      if (!clientExists) {
        return res.status(400).json({ message: "Client not found" });
      }

      if (!(await bcrypt.compare(password, clientExists.password))) {
        return res.status(400).json({ message: "Incorrect password" });
      }

      return res
        .status(200)
        .json({ user: clientExists, token: generateToken('id', clientExists.id), type: "Client" });
    } else {
      const autonomousExists = await AutonomousRepository.findAutonomousByLogin(
        { login }
      );

      if (!autonomousExists) {
        return res.status(400).json({ message: "Client not found" });
      }

      if (!(await bcrypt.compare(password, autonomousExists.password))) {
        return res.status(400).json({ message: "Incorrect password" });
      }


      return res
        .status(200)
        .json({ user: autonomousExists, token: generateToken('id', autonomousExists.id), type: "Autonomous" });
    }
  }


  async newClientPassword(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);
    const { password }: { password: string } = req.body;

    const clientExists = await ClientRepository.findClientById({ id: parsedId });

    if (!clientExists) {
      return res.status(400).json({ message: "Client not found" });
    }
    const client = await ClientRepository.updatePassword({
      id: Number(id),
      password: await bcrypt.hash(password, 8),
    });

    return res.json({ client });
  }

  async newAutonomousPassword(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);
    const { password }: { password: string } = req.body;

    const autonomousExists = await AutonomousRepository.findAutonomousById({ id: parsedId });

    if (!autonomousExists) {
      return res.status(400).json({ message: "Autonomous not found" });
    }
    const autonomous = await AutonomousRepository.updatePassword({
      id: Number(id),
      password: await bcrypt.hash(password, 8),
    });

    return res.json({ autonomous });
  }
}

export default new AuthController();
