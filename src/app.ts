import express from 'express';
import 'express-async-errors';
import { cors, errorHandler } from './middlewares';
import apiRoutes from './routes/api';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors);

app.use(apiRoutes);

app.use(errorHandler);

export default app;
