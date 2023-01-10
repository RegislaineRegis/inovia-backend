import { Router } from 'express';
import { authController } from '$/controllers/authController';


const authRoutes = Router();

authRoutes.post('/', async (req, res) => {
  const result = await authController.postLogin(req.body);
  res.status(201).json(result);
});

export default authRoutes;
