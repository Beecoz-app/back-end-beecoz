import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ClientRepository from "../../repositories/Client/ClientRepository";
import AutonomousRepository from "../../repositories/Autonomous/AutonomousRepository";

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

      const token = jwt.sign(
        { id: clientExists.id },
        String(process.env.AUTH_SECRET),
        {
          expiresIn: 86400,
        }
      );

      return res
        .status(200)
        .json({ client: clientExists, token, type: "Client" });
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

      const token = jwt.sign(
        { id: autonomousExists.id },
        String(process.env.AUTH_SECRET),
        {
          expiresIn: 86400,
        }
      );

      return res
        .status(200)
        .json({ client: autonomousExists, token, type: "Autonomous" });
    }
  }
}

export default new AuthController();
