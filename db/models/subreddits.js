'use strict';
module.exports = (sequelize, DataTypes) => {
  var subreddits = sequelize.define('subreddits', {
    name: DataTypes.STRING,
    moderators: DataTypes.STRING,
    subscribers: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return subreddits;
};