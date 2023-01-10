import { User } from '$/domain';
import { models } from '$/models/sequelize';


export const userService = {
  async getByEmail(email: string): Promise<User> {
    const userByEmail = await models.user.findOne(
      { where: { email }, raw: true }
    );
    if (!userByEmail) {
      const error = new Error('Email de usuário não encontrado');
      error.name = 'ValidationError';
      throw error;
    }
    return userByEmail as unknown as User;
  }
};
