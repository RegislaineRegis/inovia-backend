import { Customer } from '$/domain';
import { customerService } from '$/services/customerService';
import { authValidators } from '$/validators/authValidators';

export const customerController = {
  async getFullCustomer(): Promise<[Customer.Output]> {
    const data = await customerService.getFullCustomer();
    return data as unknown as [Customer.Output];
  },

  async addCustomer(body: Customer.Output): Promise<Customer.Output> {
    const result = await authValidators.customer.validateAsync(body);
    const data = await customerService.addCustomer(result);
    return data as unknown as Customer.Output;
  }
};
