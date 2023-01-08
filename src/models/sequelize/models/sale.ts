import { DataTypes, ModelAttributes, ModelOptions, Sequelize } from 'sequelize';
import { SequelizeModel } from '../types';

const schema: ModelAttributes = {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  customer_id: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING(10),
    allowNull: false
  }
};

const options: ModelOptions = {
  timestamps: false,
  tableName: 'sale'
};

const associate: SequelizeModel['associate'] = (models, sale): void => {
  sale.hasOne(models.customer, { sourceKey: 'customer_id', foreignKey: 'id' });
  sale.hasMany(models.sale_product, { sourceKey: 'id', foreignKey: 'sale_id' });
};

export const makeSale = (sequelize: Sequelize): SequelizeModel => {
  const model = sequelize.define(options.tableName, schema, options) as SequelizeModel;
  model.associate = associate;
  return model;
};
