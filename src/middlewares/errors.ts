
const makeError = (name: string, defaultMesage?: string) =>
  (message = defaultMesage) => {
    const error = new Error(message);
    error.name = name;
    throw error;
  };

export const UnauthorizedError = makeError('UnauthorizedError');

export const NotFoundError = makeError('NotFoundError');

