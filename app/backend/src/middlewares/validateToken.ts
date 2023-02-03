import { Request, Response, NextFunction } from 'express';
import jwt from './jwt';
import { Ivalid } from '../types';

export default function validationTokenUser(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(400).json({ message: 'token nonexistent' });
  }
  const { email } = jwt.verify(authorization) as Ivalid;

  if (!email) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  return next();
}
