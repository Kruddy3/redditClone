'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {[{
      username: 'kevin',
      password: 'tipper123',
      createdAt: '2018-01-19 05:54:32',
      updatedAt: '2018-01-19 05:54:32'
    },
    {
      username: 'gabby',
      password: 'tipper213',
      createdAt: '2018-01-19 05:54:32',
      updatedAt: '2018-01-19 05:54:32'
    },
    {
      username: 'kito',
      password: 'tipper321',
      createdAt: '2018-01-19 05:54:32',
      updatedAt: '2018-01-19 05:54:32'
    }]
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
