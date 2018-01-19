'use strict';
module.exports = (sequelize, DataTypes) => {
  var comments = sequelize.define('comments', {
    user - posted: DataTypes.STRING,
    upvotes: DataTypes.INTEGER,
    comment - tree: DataTypes.INTEGER,
    post - id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return comments;
};