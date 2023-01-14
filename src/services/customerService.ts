import { Customer } from '$/domain';
import { models } from '$/models/sequelize';

export const customerService = {
  async getFullCustomer(): Promise<[Customer]> {
    const data = await models.customer.findAll();
    return data as unknown as [Customer];
  }
};
