const Sequelize = require('sequelize');



module.exports = function tables(sequelize){

  var Comments = sequelize.define('comments',{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    userPostedId: {
      type: Sequelize.INTEGER
    },
    body: {
      type: Sequelize.STRING
    },
    upvotes: {
      type: Sequelize.INTEGER
    },
    commentTree: {
      type: Sequelize.INTEGER
    },
    postId: {
      type: Sequelize.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  })
  return Comments;
}
