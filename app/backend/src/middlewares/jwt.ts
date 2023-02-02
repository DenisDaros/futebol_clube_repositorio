import 'dotenv/config';
import jwt = require('jsonwebtoken');

const secret = `${process.env.JWT_SECRET}`;

const jwtConfig = {
  expiresIn: '7d',
};

export default class generateJwt {
  static createToken(user: string) {
    const token = jwt.sign({ email: user }, secret, jwtConfig);
    return token;
  }

  static verify(token:string) {
    const tokenVerify = jwt.verify(token, secret);
    return tokenVerify;
  }
}
