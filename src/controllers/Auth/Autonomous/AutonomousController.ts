import { Autonomous } from "@prisma/client";
import { Request, Response } from "express";
import AutonomousRepository from "../../../repositories/Autonomous/AutonomousRepository";
import LoginRepository from "../../../repositories/Login/LoginRepository";
import TypeUserRepository from "../../../repositories/TypeUser/TypeUserRepository";
import { hashPassword} from "../../../utils/password";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class AuthAutonomousController {
    async register(req: Request, res: Response) {
        const {
        name,
        email,
        password,
        cellNumber,
        lastName
        }: Autonomous & { email: string; password: string, cellNumber: number | null, biography: string } = req.body;

        const login = await LoginRepository.create({ data: { email, password, cellNumber } });
        const typeId = await TypeUserRepository.findByLevel({ level:  === 'Beginner' 'Queen' : 'Intermediate' })
        const profile = await AutonomousRepository.create({ data: { name, lastName, loginId: login.id, typeId } })
        
        const autonomous = await AutonomousRepository.create({ data: { name, lastName, loginId: login.id, typeId } })

        return res.json({ autonomous })
    }