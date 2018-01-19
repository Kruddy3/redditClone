'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comments', [{
        userPosted: 1,
        upvotes: 7,
        commentTree: 0, //0 means original content any other number means a reply to the comment id stored in commentTree
        postId: 1,
        createdAt: '2018-01-19 05:54:32',
        body: 'this is the body for kevins post',
        updatedAt: '2018-01-19 05:54:32'
      },
      {
        userPosted: 2,
        upvotes: 2,
        commentTree: 1, //1 means reply to 1st comment
        postId: 1,
        createdAt: '2018-01-19 05:54:32',
        body: 'this is the body for gabbys post',
        updatedAt: '2018-01-19 05:54:32'
      },
      {
        userPosted: 3,
        upvotes: 8,
        commentTree: 0,
        postId: 2,
        body: 'this is the body for kitos post',
        createdAt: '2018-01-19 05:54:32',
        updatedAt: '2018-01-19 05:54:32'
      }
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
