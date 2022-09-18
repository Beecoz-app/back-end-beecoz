import {Request, Response} from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import LoginRepository from '../../repositories/Login/LoginRepository';
import ClientRepository from '../../repositories/Client/ClientRepository';
import AutonomousRepository from '../../repositories/Autonomous/AutonomousRepository';

class AuthController {
    async login (req: Request, res: Response) {
        const { email, password } = req.body;
    
        const userExists = await LoginRepository.findByEmail({ email });

        if (!userExists) {
          return res.status(400).json({ message: "Client not found" });
        }
    
        if (!await bcrypt.compare(password, userExists.password)) {
          return res.status(400).json({ message: "Incorrect password" });
        }

        const isClient = await ClientRepository.findClientByLoginId({loginId: userExists.id})
        const isAutonomous = await AutonomousRepository.findAutonomousByLoginId({loginId: userExists.id})

        if (isClient) {
          const token = jwt.sign({ id: isClient.id }, String(process.env.AUTH_SECRET), {
            expiresIn: 86400,
          });

          return res.status(200).json({ user: isClient, token });
        } else {
          const token = jwt.sign({ id: isAutonomous?.id }, String(process.env.AUTH_SECRET), {
            expiresIn: 86400,
          });

          return res.status(200).json({ user: isAutonomous, token });
        }
      }
}

export default new AuthController()