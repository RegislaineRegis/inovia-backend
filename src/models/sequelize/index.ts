import { makeCustomer, makeSale, makeSaleProduct, makeUser } from './models/';
import { Sequelize } from 'sequelize';
import vars from '$/vars';

const sequelize = new Sequelize(vars.postgres);

const models = {
  user: makeUser(sequelize),
  customer: makeCustomer(sequelize),
  sale: makeSale(sequelize),
  saleProduct: makeSaleProduct(sequelize)
};

Object
  .values(models)
  .forEach(model => { model.associate?.(models, model); });


export default sequelize;
