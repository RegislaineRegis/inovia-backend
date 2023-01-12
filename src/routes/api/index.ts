import { Router } from 'express';
import authRoutes from './auth.routes';

const apiRoutes = Router();

apiRoutes.use('/auth', authRoutes);

export default apiRoutes;
