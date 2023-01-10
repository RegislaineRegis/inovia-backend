import vars from '$/vars';
import { Sequelize } from 'sequelize';
import { makeCustomer, makeSale, makeSaleProduct, makeUser } from './models';

const sequelize = new Sequelize(vars.postgres);

export const models = {
  user: makeUser(sequelize),
  customer: makeCustomer(sequelize),
  sale: makeSale(sequelize),
  saleProduct: makeSaleProduct(sequelize)
};

Object
  .values(models)
  .forEach(model => { model.associate?.(models, model); });


export default sequelize;
