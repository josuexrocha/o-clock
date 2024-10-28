'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      ALTER SEQUENCE "Role_id_seq" RENAME TO role_id_seq;
      ALTER TABLE role RENAME CONSTRAINT "Role_pkey" TO role_pkey;
      ALTER TABLE role RENAME CONSTRAINT "Role_name_key" TO role_name_key;
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      ALTER SEQUENCE role_id_seq RENAME TO "Role_id_seq";
      ALTER TABLE role RENAME CONSTRAINT role_pkey TO "Role_pkey";
      ALTER TABLE role RENAME CONSTRAINT role_name_key TO "Role_name_key";
    `);
  }
};