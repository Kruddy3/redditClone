'use strict';
module.exports = (sequelize, DataTypes) => {
  var moderator = sequelize.define('moderator', {
    userId: DataTypes.INTEGER,
    subId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return moderator;
};