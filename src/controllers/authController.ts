import { Login } from '$/domain';
import jwt from 'jsonwebtoken';
import { NotFoundError } from '$/middlewares/errors';
import { authService } from '$/services/authService';
import { userService } from '$/services/userService';
import { authValidators } from '$/validators/authValidators';

const jwtSecret = process.env.JWT_SECRET || '123456';


export const authController = {
  async postLogin(body: any): Promise<Login.Output> {
    const data = await authValidators.login.validateAsync(body);
    const user = await userService.getByEmail(data.email);
    await authService.checkPassword(data.password, user.password);
    const tokenUser = await authService.createToke(user, '15m', '40m');
    return tokenUser as any as Login.Output;
  },

  async verifyRefresh(token: string): Promise<Login.Output> {
    try {
      const decoded = jwt.verify(token, jwtSecret);
      const user = await userService.getByEmail(decoded.data.email);
      if (!user) NotFoundError('Error looking up token user');
      const tokenUser = await authService.createToke(user, '15m', '40m');
      return tokenUser;
    } catch (err) {
      return err;
    }
  }

};
