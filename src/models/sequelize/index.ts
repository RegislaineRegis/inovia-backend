import vars from '$/vars';
import { Sequelize } from 'sequelize';
import { makeUser } from './models';

const sequelize = new Sequelize(vars.postgres);

export const models = {
  user: makeUser(sequelize)
};

Object
  .values(models)
  .forEach(model => { model.associate?.(models, model); });


export default sequelize;
