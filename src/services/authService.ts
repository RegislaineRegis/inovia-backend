import { Login, User } from '$/domain';
import { UnauthorizedError } from '$/middlewares/errors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET || '123456';

export const authService = {
  async checkPassword(passwordBody: string, passwordDB: string): Promise<boolean> {
    const verifyPass = await bcrypt.compare(passwordBody, passwordDB);
    if (!verifyPass) {
      UnauthorizedError('password is wrong');
    }
    return verifyPass;
  },

  async createToke(user: User, timeAccessToken: string, timeRefreshToken: string): Promise<Login.Output> {
    const { password: _, ...userInfo } = user;

    const accessToken = jwt.sign({ data: userInfo }, jwtSecret, {
      expiresIn: timeAccessToken,
      algorithm: 'HS256'
    });
    const refreshToken = jwt.sign({ data: userInfo }, jwtSecret, {
      expiresIn: timeRefreshToken,
      algorithm: 'HS256'
    });
    const userToken = {
      id: user.id,
      email: user.email,
      accessToken,
      refreshToken,
      tokenType: 'Bearer',
      expiresIn: 2400
    };
    return userToken as any as Login.Output;
  }

};
