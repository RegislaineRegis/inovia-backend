import { User } from '$/domain';
import { models } from '$/models/sequelize';
import bcrypt from 'bcrypt';


export const userService = {
  async getByEmail(email: string): Promise<User> {
    const userByEmail = await models.user.findOne(
      { where: { email }, raw: true }
    );
    if (!userByEmail) {
      const error = new Error('Email Inválido, usuário não encontrado');
      error.name = 'ValidationError';
      throw error;
    }
    return userByEmail as unknown as User;
  },

  async checkPassword(passwordBody: string, passwordDB: string) {
    const verifyPass = await bcrypt.compare(passwordBody, passwordDB);
    if (!verifyPass) {
      const error = new Error('Senha inválida');
      error.name = 'ValidationError';
      throw error;
    }
    return verifyPass;
  }
};
