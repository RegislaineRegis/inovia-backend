import { authController } from '$/controllers/authController';
import { NotFoundError } from '$/middlewares/errors';
import { authValidators } from '$/validators/authValidators';
import { Router } from 'express';

const authRoutes = Router();

authRoutes.post('/login', async (req, res) => {
  const result = await authController.postLogin(req.body);
  res.status(201).json(result);
});

authRoutes.post('/refresh', async (req, res) => {
  const { authorization } = req.headers;
  const token = await authValidators.refresh.validateAsync(authorization);
  if (!token) NotFoundError('não tem token');
  const user = await authController.verifyRefresh(token);
  const { password: _, ...userInfo } = user;
  res.json(userInfo);
});

export default authRoutes;
