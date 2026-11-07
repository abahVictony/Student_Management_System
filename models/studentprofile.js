'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      StudentProfile.belongsTo(models.Student, {
        foreignKey: departmentId,
        as: "department",
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })}
  }
  StudentProfile.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },

      studentId: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        references: {
          model: "Students",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },

      dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },

      gender: {
        type: DataTypes.ENUM('Male', 'Female'),
        allowNull: true
      },

      phonenumber: {
        type: DataTypes.STRING,
        allowNull: true
      },

      address: {
        type: DataTypes.TEXT,
        allowNull: true
      },

      guardianName: {
        type: DataTypes.STRING,
        allowNull: true
      },

      guardianPhone: {
        type: DataTypes.STRING,
        allowNull: true
      },

      bio: {
        type: DataTypes.STRING,
        allowNull: true
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
    modelName: 'StudentProfile',
    tableName: 'StudentProfiles',
    timestamps: true
  });
  return StudentProfile;
};