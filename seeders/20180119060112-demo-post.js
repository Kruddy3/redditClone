'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', [{
        title: 'Naps literally kill you',
        body: 'Studies show naps cause your chakra energies to collide intern killing you',
        upvotes: '7',
        category: 'funny',
        createdAt: '2018-01-19 05:54:32',
        updatedAt: '2018-01-19 05:54:32'
      },
      {
        title: 'Do dogs smell',
        body: 'no dogs do not have noses so they can not smell',
        upvotes: '1',
        category: 'funFacts',
        createdAt: '2018-01-19 05:54:32',
        updatedAt: '2018-01-19 05:54:32'
      },
      {
        title: 'Sky atlas',
        body: 'big true true',
        upvotes: '14',
        category: 'funny',
        createdAt: '2018-01-19 05:54:32',
        updatedAt: '2018-01-19 05:54:32'
      },
    {
        title: 'Best cereal?',
        body: 'Honey bunches of oats is god tier cereal but a special shout out to my boy rice crispies',
        upvotes: '100',
        category: 'facts',
        createdAt: '2018-01-19 05:54:32',
        updatedAt: '2018-01-19 05:54:32'
      },
    {
        title: 'Milk is the best marinade',
        body: '^see title',
        upvotes: '42',
        category: 'facts',
        createdAt: '2018-01-19 05:54:32',
        updatedAt: '2018-01-19 05:54:32'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
