'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StudentCourses', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },

      studentId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
            model:"Students",
            key:"id"
        },

        onDelete:"CASCADE",
        onUpdate:"CASCADE"
      },
      courseId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
            model:"Courses",
            key:"id"
        },
        
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
      },


      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StudentCourses');
  }
};