import {Request, Response} from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import LoginRepository from '../../repositories/Login/LoginRepository';

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
      
        const token = jwt.sign({ id: user.id }, String(process.env.AUTH_SECRET), {
          expiresIn: 86400,
        });
    
    
        return res.status(200).json({ user, token });
      }
}

export default new AuthController()