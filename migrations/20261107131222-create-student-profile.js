'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StudentProfiles', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },

      studentId: {
        type: Sequelize.UUID,
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
        type: Sequelize.DATEONLY,
        allowNull: true
      },

      gender: {
        type: Sequelize.ENUM('Male', 'Female'),
        allowNull: true
      },

      phonenumber: {
        type: Sequelize.STRING,
        allowNull: true
      },

      address: {
        type: Sequelize.TEXT,
        allowNull: true
      },

      guardianName: {
        type: Sequelize.STRING,
        allowNull: true
      },

      guardianPhone: {
        type: Sequelize.STRING,
        allowNull: true
      },

      bio: {
        type: Sequelize.STRING,
        allowNull: true
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
    await queryInterface.dropTable('StudentProfiles');
  },
};