import { Login } from '$/domain';
import { loginSchema } from '$/validators';
import { userService } from '$/services/userService';


export const authController = {
  async postLogin(body: any): Promise<Login.LoginInput> {
    const { email, password } = body;
    await loginSchema.validateAsync({ email, password });
    const user = await userService.getByEmail(email);
    return user;
  }
};
