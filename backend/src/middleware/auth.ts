/**
 * 1. store hash of mail and pw
 * 2. controls the mail and pw with hash
 * 3. create jwt token
 */
import bcrypt from "bcryptjs"
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

class AuthMiddleware {


    async getHash(pw: string): Promise<string> {
        const hashedValue = await bcrypt.hash(pw, 16);
        return hashedValue;
    }


    async tokenValidation(req: Request, res: Response, next: NextFunction): Promise<void> {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            res.status(401).send({ message: 'Access denied. No token provided.' });
        }
        const secret = process.env.JWT_TOKEN_SECRET;
        if (!secret) {
            throw new Error('JWT_SECRET is not defined');
        }

        try {
            if (typeof token !== 'string') {
                throw new Error('Invalid token');
            }

            const decoded = jwt.verify(token!, process.env.JWT_TOKEN_SECRET!) as jwt.JwtPayload;
            req.user  = decoded;
            next();
        } catch (error) {
            console.error('Token validation error:', error); // Debugging line
            res.status(400).send({ message: 'Invalid token.', error: error});
        }
    }
}

export default AuthMiddleware;