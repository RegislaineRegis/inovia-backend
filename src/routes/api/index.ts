import { Router } from 'express';
import authRoutes from './auth.routes';
import customerRoutes from './customer.routes';

const apiRoutes = Router();

apiRoutes.use('/auth', authRoutes);

apiRoutes.use('/customer', customerRoutes);

export default apiRoutes;
