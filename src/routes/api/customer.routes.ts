import { customerController } from '$/controllers/customerController';
import { Router } from 'express';

const customerRoutes = Router();

customerRoutes.get('/', async (req, res) => {
  const result = await customerController.getFullCustomer();
  res.status(200).json(result);
});
export default customerRoutes;
