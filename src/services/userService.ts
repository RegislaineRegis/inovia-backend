import { User } from '$/domain';

export const userService = {
  async getByEmail(email: string): Promise<User> {
    const userByEmail = await SequelizeModel.findOne(
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
