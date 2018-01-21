const Sequelize = require('sequelize');



module.exports = function tables(sequelize){
  var Post = sequelize.define('posts',{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING
    },
    body: {
      type: Sequelize.STRING
    },
    upvotes: {
      type: Sequelize.INTEGER
    },
    category: {
      type: Sequelize.STRING
    },
    link: {
      type: Sequelize.STRING
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
  return Post;
}
