var collectorHolder;

module.exports = function tables(sequelize){

  collectorHolder = {
    post: require("./models/postModel.js"),
    comment: require("./models/commentModel.js"),
    moderator: require("./models/moderatorModel.js"),
    user: require("./models/userModel.js"),
    subreddit: require("./models/subredditModel.js")
  }

  return collectorHolder;
}
