// import { Login } from '$/domain';
import { authService } from '$/services/authService';
import { userService } from '$/services/userService';
import { authValidators } from '$/validators/validateLogin';

export const authController = {
  async postLogin(body: any) {
    const data = await authValidators.loginSchema.validateAsync(body);
    const user = await userService.getByEmail(data.email);
    const verifyPass = await authService.checkPassword(data.password, user.password);
    return verifyPass;
  }
};
