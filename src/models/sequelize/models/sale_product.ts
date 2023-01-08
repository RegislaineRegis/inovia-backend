import { DataTypes, ModelAttributes, ModelOptions, Sequelize } from 'sequelize';
import { SequelizeModel } from '../types';

const schema: ModelAttributes = {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  sale_id: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  product_id: {
    type: DataTypes.STRING(120),
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(120),
    allowNull: false
  },
  brand: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  label: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  quantity: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  tax: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
};

const options: ModelOptions = {
  timestamps: false,
  tableName: 'sale_product'
};

const associate: SequelizeModel['associate'] = (models, sale_product): void => {
  sale_product.belongsTo(models.sale, { foreignKey: 'sale_id', targetKey: 'id' });
};

export const makeCustomer = (sequelize: Sequelize): SequelizeModel => {
  const model = sequelize.define(options.tableName, schema, options) as SequelizeModel;
  model.associate = associate;
  return model;
};
