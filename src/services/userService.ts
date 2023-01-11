import { User } from '$/domain';
import { NotFoundError } from '$/middlewares/errors';
import { models } from '$/models/sequelize';

export const userService = {
  async getByEmail(email: string): Promise<User> {
    const userByEmail = await models.user.findOne(
      { where: { email }, raw: true }
    );
    if (!userByEmail) {
      NotFoundError('Email not found');
    }
    return userByEmail as unknown as User;
  }
};
