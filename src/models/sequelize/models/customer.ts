import { DataTypes, ModelAttributes, ModelOptions, Sequelize } from 'sequelize';
import { SequelizeModel } from '../types';

const schema: ModelAttributes = {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(120),
    allowNull: false
  },
  address: {
    type: DataTypes.STRING(120),
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING(120),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(120),
    allowNull: false
  },
  birthDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  profilePhoto: {
    type: DataTypes.TEXT,
    allowNull: false
  }
};

const options: ModelOptions = {
  timestamps: false,
  tableName: 'customer'
};

const associate: SequelizeModel['associate'] = (models, customer): void => {
  customer.hasOne(models.user, { sourceKey: 'user_id', foreignKey: 'id' });
  customer.hasMany(models.sale, { sourceKey: 'id', foreignKey: 'customer_id' });
};

export const makeCustomer = (sequelize: Sequelize): SequelizeModel => {
  const model = sequelize.define(options.tableName, schema, options) as SequelizeModel;
  model.associate = associate;
  return model;
};
