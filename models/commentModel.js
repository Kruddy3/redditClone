module.exports = (sequelize, DataTypes) => {
  var Comments = sequelize.define('comments',{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userPostedId: {
      type: DataTypes.INTEGER
    },
    body: {
      type: DataTypes.STRING
    },
    upvotes: {
      type: DataTypes.INTEGER
    },
    commentTree: {
      type: DataTypes.INTEGER
    },
    postId: {
      type: DataTypes.INTEGER
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
  Comments.associate = function(models) {
    models.comments.belongsTo(models.posts);
  };
  return Comments;
}
