import { customerController } from '$/controllers/customerController';
import { NotFoundError } from '$/middlewares/errors';
import { authValidators } from '$/validators/authValidators';
import { Router } from 'express';

const customerRoutes = Router();

customerRoutes.post('/', async (req, res) => {
  const result = await customerController.addCustomer(req.body);
  res.status(201).json(result);
});

customerRoutes.get('/', async (req, res) => {
  const { authorization } = req.headers;
  const validateAuth = await authValidators.refresh.validateAsync(authorization);
  const token = validateAuth.split(' ');
  if (!token) return NotFoundError('Token invalido');
  const result = await customerController.getFullCustomer();
  res.status(200).json(result);
});

export default customerRoutes;
