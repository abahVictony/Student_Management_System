'use strict';
const {
  Model
} = require('sequelize');
const student = require('./student');
module.exports = (sequelize, DataTypes) => {
  class Departments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Departments.hasMany(models.Student,{
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      
    }
  }
  Departments.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      department_Name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
  }, {
    sequelize,
    modelName: 'Departments',
    tableName: 'Departments',
    timestamps: true
  });
  return Departments;
};