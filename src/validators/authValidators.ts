import { Customer, Login } from '$/domain';
import Joi from 'joi';


export const authValidators = {
  login: Joi.object<Login.Input>({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required()
  }),

  refresh: Joi.string().required().pattern(/Bearer\s.+/),

  customer: Joi.object<Customer.Output>({
    id: Joi.number().required(),
    user_id: Joi.allow(null),
    name: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    birthDate: Joi.date().required(),
    profilePhoto: Joi.string().required()
  })
};
