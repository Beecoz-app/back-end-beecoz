import { Client } from "@prisma/client";
import { Request, Response } from "express";
import ClientProfileRepository from "../../../repositories/Client/ClientProfile/ClientProfileRepository";
import ClientRepository from "../../../repositories/Client/ClientRepository";
import LoginRepository from "../../../repositories/Login/LoginRepository";
import TypeUserRepository from "../../../repositories/TypeUser/TypeUserRepository";
import { hashPassword } from "../../../utils/password";
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
      biography,
    }: Client & {
      email: string;
      password: string;
      cellNumber: string;
      biography: string;
    } = req.body;


    const login = await LoginRepository.create({
      data: { email, password: await hashPassword(password), cellNumber },
    });

    const profile = await ClientProfileRepository.create({
      data: { biography },
    });
    const typeId = await TypeUserRepository.findByLevel({
      level: gender === "Female" ? "Queen" : "Beginner",
    });

    const client = await ClientRepository.create({
      data: {
        name,
        lastName,
        gender,
        bornDate: new Date(),
        cpf,
        loginId: login.id,
        profileId: profile.id,
        typeId,
      },
    });

    const token = jwt.sign({ id: client.id }, String(process.env.AUTH_SECRET), {
      expiresIn: 86400,
    });

    return res.json({ client, token });
  }

  async read(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const client = await ClientRepository.findClientById({ id: parsedId });

    return res.json(client);
  }

  async readById(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const client = await ClientRepository.findClientById({ id: parsedId });

    return res.json(client);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const clientExists = await ClientRepository.findClientById({
      id: parsedId,
    });
    if (!clientExists) {
      return res.status(400).json({ message: "Client not found" });
    }

    await ClientRepository.delete({ id: parsedId });

    return res.status(200).json({ message: "Client deleted successfully" });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);
    const {
      name,
      email,
      password,
      cellNumber,
      lastName,
    }: Client & { email: string; password: string; cellNumber: string } =
      req.body;

    const clientExists = await ClientRepository.findClientById({
      id: parsedId,
    });
    if (!clientExists) {
      return res.status(400).json({ message: "Client not found" });
    }

    const login = await LoginRepository.update({
      id: clientExists.loginId,
      data: { email, password: await hashPassword(password), cellNumber },
    });
    const client = await ClientRepository.update({
      id: parsedId,
      data: { name, lastName, loginId: login.id },
    });

    return res.json({ client });
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const client = await ClientRepository.findClientById({ id: parsedId });

    return res.json(client);
  }
}

export default new AuthClientController();
