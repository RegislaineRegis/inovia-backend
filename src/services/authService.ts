import bcrypt from 'bcrypt';

export const authService = {
  async checkPassword(passwordBody: string, passwordDB: string): Promise<boolean> {
    const verifyPass = await bcrypt.compare(passwordBody, passwordDB);
    if (!verifyPass) {
      const error = new Error('Senha inválida');
      error.name = 'ValidationError';
      throw error;
    }
    return verifyPass;
  }
};
