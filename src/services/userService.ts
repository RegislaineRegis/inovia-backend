import { User } from '$/domain';
import { UnauthorizedError } from '$/middlewares/errors';
import { models } from '$/models/sequelize';

export const userService = {
  async getByEmail(email: string): Promise<User> {
    const userByEmail = await models.user.findOne(
      { where: { email }, raw: true }
    );
    if (!userByEmail) {
     UnauthorizedError('Email not found');
    }
    return userByEmail as unknown as User;
  }
};
