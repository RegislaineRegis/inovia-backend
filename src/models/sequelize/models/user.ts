import { DataTypes, ModelAttributes, ModelOptions, Sequelize } from 'sequelize';
import { SequelizeModel } from '../types';

const schema: ModelAttributes = {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(120),
    allowNull: false
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false
  }
};

const options: ModelOptions = {
  timestamps: false,
  tableName: 'user'
};

const associate: SequelizeModel['associate'] = (models, user): void => {
  user.belongsTo(models.customer, { foreignKey: 'id', targetKey: 'user_id' });
};

export const makeUser = (sequelize: Sequelize): SequelizeModel => {
  const model = sequelize.define(options.tableName, schema, options) as SequelizeModel;
  model.associate = associate;
  return model;
};
