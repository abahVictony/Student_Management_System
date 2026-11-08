'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       StudentCourse.belongsTo(models.Course,{
            foreignKey : "courseId",
            onDelete: "CASCADE",
            onUpdate:"CASCADE"
        })

        StudentCourse.belongsTo(models.Student,{
            foreignKey : "studentId",
            onDelete: "CASCADE",
            onUpdate:"CASCADE"
        })
    }
  }
  StudentCourse.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4
      },

      studentId: {
        type:DataTypes.UUID,
         defaultValue:DataTypes.UUIDV4,
        allowNull: false,
        references: {
            model:"Students",
            key:"id"
        },
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
      },

      courseId: {
        type:DataTypes.UUID,
         defaultValue:DataTypes.UUIDV4,
        allowNull: false,
        references: {
            model:"Couses",
            key:"id"
        },
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
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
    modelName: 'StudentCourse',
    tableName:'StudentCourses',
    timestamps:true
  });
  return StudentCourse;
};