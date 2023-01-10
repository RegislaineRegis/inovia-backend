import { Login } from '$/domain';
import Joi from 'joi';


export const authValidators = {
  loginSchema: Joi.object<Login.Input>({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required()
  })
};
