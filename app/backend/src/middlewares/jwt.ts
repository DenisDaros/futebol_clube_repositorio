import 'dotenv/config';
import jwt = require('jsonwebtoken');

const secret = `${process.env.JWT_SECRET}`;

const jwtConfig = {
  expiresIn: '7d',
};

export default class generateJwt {
  static createToken(user: string) {
    const token = jwt.sign({ data: user }, secret, jwtConfig);
    return token;
  }

  static verify(token:string) {
    return jwt.verify(token, secret);
  }
}
