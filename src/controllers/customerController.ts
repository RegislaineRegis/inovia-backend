import { Customer } from '$/domain';
import { customerService } from '$/services/customerService';

export const customerController = {
  async getAll(): Promise<[Customer]> {
    const data = await customerService.getFullCustomer();
    return data as unknown as [Customer];
  }
};
