'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('Role', 'role');
    await queryInterface.renameColumn('role', 'createdAt', 'created_at');
    await queryInterface.renameColumn('role', 'updatedAt', 'updated_at');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('role', 'Role');
    await queryInterface.renameColumn('Role', 'created_at', 'createdAt');
    await queryInterface.renameColumn('Role', 'updated_at', 'updatedAt');
  }
};