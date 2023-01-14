import { authController } from '$/controllers/authController';
import { authValidators } from '$/validators/authValidators';
import { Router } from 'express';

const authRoutes = Router();

authRoutes.post('/login', async (req, res) => {
  const result = await authController.postLogin(req.body);
  res.status(201).json(result);
});

authRoutes.post('/refresh', async (req, res) => {
  const { authorization } = req.headers;
  const tokenValidate = await authValidators.refresh.validateAsync(authorization);
  const token = tokenValidate.split(' ');
  const user = await authController.verifyRefresh(token[1]);
  res.json(user);
});

export default authRoutes;
