import { Router } from 'express';
import { apiRoutes } from './api';

const routes = Router();

routes.use('/api', apiRoutes);

routes.get('/login', (_req, res) => {
  res.sendStatus(200);
});

export default routes;
