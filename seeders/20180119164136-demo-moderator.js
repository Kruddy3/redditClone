'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('moderators', [
    {
      userId: 1,
      subId: 1,
      createdAt: '2018-01-19 05:54:32',
      updatedAt: '2018-01-19 05:54:32'
    },
    {
      userId: 2,
      subId: 2,
      createdAt: '2018-01-19 05:54:32',
      updatedAt: '2018-01-19 05:54:32'
    },
    {
      userId: 3,
      subId: 2,
      createdAt: '2018-01-19 05:54:32',
      updatedAt: '2018-01-19 05:54:32'
    },
    {
      userId: 1,
      subId: 3,
      createdAt: '2018-01-19 05:54:32',
      updatedAt: '2018-01-19 05:54:32'
    },
    {
      userId: 2,
      subId: 3,
      createdAt: '2018-01-19 05:54:32',
      updatedAt: '2018-01-19 05:54:32'
    },
    {
      userId: 3,
      subId: 3,
      createdAt: '2018-01-19 05:54:32',
      updatedAt: '2018-01-19 05:54:32'
    },
    ], {});
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
