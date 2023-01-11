import { Login } from '$/domain';
import { authService } from '$/services/authService';
import { userService } from '$/services/userService';
import { authValidators } from '$/validators/validateLogin';

export const authController = {
  async postLogin(body: any): Promise<Login.Token > {
    const data = await authValidators.loginSchema.validateAsync(body);
    const user = await userService.getByEmail(data.email);
    await authService.checkPassword(data.password, user.password);
    const tokenUser = await authService.createToke(user, '15m', '40m');
    return tokenUser as any as Login.Token;
  }
};
