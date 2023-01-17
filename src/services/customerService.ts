import { Customer } from '$/domain';
import { models } from '$/models/sequelize';

export const customerService = {
  async getFullCustomer(): Promise<[Customer.Output]> {
    const data = await models.customer.findAll();
    return data as unknown as [Customer.Output];
  },

  async addCustomer(body: Customer.Output): Promise<Customer.Output> {
   const { id, user_id, name, address, phone, email, birthDate, profilePhoto } = body;
    const dataValues = await models.customer.create({
     id,
     user_id,
     name,
     address,
     phone,
     email,
     birthDate,
     profilePhoto
   });
   return dataValues as unknown as Customer.Output;
 }
};
