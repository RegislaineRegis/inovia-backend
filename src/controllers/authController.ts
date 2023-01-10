import { Login } from '$/domain';
import { userService } from '$/services/userService';
import { authValidators } from '$/validators/validateLogin';

export const authController = {
  async postLogin(body: any): Promise<Login.Input> {
    const data = await authValidators.loginSchema.validateAsync(body);
    const user = await userService.getByEmail(data.email);
    const verifyPass = await userService.checkPassword(data.password, user.password);
    return verifyPass;
  }
};
