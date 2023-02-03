import { Request, Response, NextFunction } from 'express';
import validateToken from '../utils/validateToken';

export default function validationEmailPassword(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(400).json({ message: 'token nonexistent' });
  }
  if (!validateToken.validUse(authorization)) {
    return res.status(200).json({ message: 'token invalid' });
  }
  return next();
}
