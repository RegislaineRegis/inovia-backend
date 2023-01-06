import { ErrorRequestHandler } from 'express';

const errors: Record<string, number> = {
  ValidationError: 400,
  UnauthorizedError: 401,
  NotFoundError: 404
};

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const { name, message } = err;
  const status = errors[name];
  if (!status) return res.sendStatus(500);
  res.status(status).json({ message });
};
