import { Login } from '$/domain';
import Joi from 'joi';


export const loginSchema: Joi.ObjectSchema<Login.LoginInput> = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});
