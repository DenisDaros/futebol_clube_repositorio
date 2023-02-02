import { NextFunction, Request, Response } from 'express';
import userService from '../services/login.service';

class loginController {
  static async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    const { message, token } = await userService.findUser(email, password);
    if (message) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }
    res.status(200).json({ token });
    next();
  }

  // static async loginAcess(req: Request, res: Response) {
  //   const token = req.header('authorization');
  //   if (!token) return res.status(400).json({ message: 'invalid token' });
  //   const roleAuthorization = userService.validUse(token);
  //   if (!roleAuthorization) return res.status(400).json({ message: 'invalid' });
  //   res.status(200).json({ role: roleAuthorization });
  // }
}

export default loginController;
