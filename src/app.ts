import express from 'express';
import 'express-async-errors';
import routes from './routes';
import { errorHandler, cors } from './middlewares';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors);

app.use(routes);

app.use(errorHandler);

export default app;
