import { authController } from '$/controllers/authController';
import { Router } from 'express';

const authRoutes = Router();

authRoutes.post('/login', async (req, res) => {
  const result = await authController.postLogin(req.body);
  res.status(201).json(result);
});

export default authRoutes;
