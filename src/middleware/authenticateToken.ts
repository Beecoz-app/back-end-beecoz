import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization']

    if (!authHeader) return res.status(401).json({ message: 'No token provided' })

    const parts = authHeader.split(' ')
    
    if (parts.length !== 2) return res.status(401).json({ message: 'Token error' })

    const [scheme, token] = parts

    if (!/^Bearer$/i.test(scheme)) return res.status(401).json({ message: 'Token malformatted' })

    jwt.verify(token, String(process.env.AUTH_SECRET), (err, decoded) => {
        
        if (err) return res.status(401).json({ message: 'Token invalid' })
        req.userId = (<any>decoded)

        console.log('decoded', decoded)

        return next()
    })
}

