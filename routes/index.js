var collectorHolder;

module.exports = function tables(){
  const sequelize = new Sequelize('redditisfornerds', 'root', 'tipper', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max:5,
      min:0,
      acquire:30000,
      idle: 10000,
    }
  })

  return {
    Post: require("./postModel.js")(sequelize)
  };
}
