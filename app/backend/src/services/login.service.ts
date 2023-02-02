import bcrypt = require('bcryptjs');
import User from '../database/models/User';
import { Ilogin, Itoken } from '../types/index';
import jwt from '../middlewares/jwt';

class userService {
  static async findUser({ email, password }: Ilogin): Promise<Itoken | undefined> {
    const user = await User.findOne({ where: { email } });

    if (user) {
      await bcrypt.compare(password, user.password);
    }

    const token = jwt.createToken(email);

    return { token };
  }

  // static async validUse(token: string): Promise<Irole | undefined> {
  //   const { email } = jwt.verify(token) as Ivalid;
  //   const user = await User.findOne({ where: { email } });
  //   if (!user) return undefined;
  //   const { role } = user;
  //   return { role };
  // }
}

export default userService;
