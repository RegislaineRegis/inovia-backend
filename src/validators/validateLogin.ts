import { Login } from '$/domain';
import Joi from 'joi';
import bcrypt from 'bcrypt';


export const authValidators = {
  loginSchema: Joi.object<Login.Input>({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required()
  }) as unknown,

  async checkPassword(passwordBody: string, passwordDB: string) {
    const verifyPass = await bcrypt.compare(passwordBody, passwordDB);
    if (!verifyPass) {
      const error = new Error('Senha inválida');
      error.name = 'ValidationError';
      throw error;
    }
    return verifyPass as boolean;
  }
};
