'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.BelongToMany(models.Student,{
            through: 'studentCourse',
            as: 'students',
            foreignKey: 'courseId',
            otherKey:"studentId",
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
        
    }
  }
  Course.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4
      },

      courseCode: {
        type:DataTypes.STRING,
        allowNull: false,
        unique:true
      },

      courseTitle: {
        type:DataTypes.STRING,
        allowNull: false
      },


      creditUnit: {
        type:DataTypes.INTEGER,
        allowNull: false
      },

      createdAt: {
        allowNull: false,
        type:DataTypes.DATE
      },

      updatedAt: {
        allowNull: false,
        type:DataTypes.DATE
      }
    
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'Courses',
    timestamps: true
  });
  return Course;
};