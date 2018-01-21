module.exports = (sequelize, DataTypes) => {
var Post = sequelize.define('posts',{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    body: {
      type: DataTypes.STRING
    },
    upvotes: {
      type: DataTypes.INTEGER
    },
    category: {
      type: DataTypes.STRING
    },
    link: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  });
  // Post.associate = function(models){
  //   models.Post.hasMany(model.Comments)
  // };
  return Post;
}
