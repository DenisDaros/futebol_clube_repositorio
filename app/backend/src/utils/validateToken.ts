import User from '../database/models/User';
import jwt from '../middlewares/jwt';
import { Ivalid } from '../types/index';

export default class validateToken {
  static async validUse(token: string) {
    const { email } = jwt.verify(token) as Ivalid;
    const user = await User.findOne({ where: { email } });
    return user;
  }
}
