'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('role', [
      {
        name: 'admin',
        permissions: JSON.stringify({all: true}),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'user',
        permissions: JSON.stringify({
          create_quiz: true,
          take_quiz: true
        }),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('role', null, {});
  }
};