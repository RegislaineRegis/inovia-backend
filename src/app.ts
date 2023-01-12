import express from 'express';
import 'express-async-errors';
import { cors, errorHandler } from './middlewares';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors);

app.use(routes);

app.use(errorHandler);

export default app;
