var mysql = require('mysql')
var express = require('express')
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json())
var Sequelize = require('sequelize');
//sequelize connection info


// routing.routingHolder();
// var models = require('./routes/index.js')(sequelize);

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

// const Post = sequelize.import(__dirname + "/models/index.js")
var models  = require('./models');
// include: [ models.Post ]
console.log('logging models ', models)

// // moderator association ~~~~~~~~~~~~
// models.subreddit.hasMany(models.moderator)
// models.moderators.belongsTo(models.subreddit)
// Users.hasMany(Moderators)
// Moderators.belongsTo(Users,{as:'user'})
//
// Post.hasMany(Comments)
// Comments.belongsTo(Post, {as:'post'})
// Comments.belongsTo(Users,{as:'userPosted'})


//the view engine is being set as jade for now
app.set('view engine', 'jade')
//sends the client all the files in the public folder
app.use(express.static('public'))
var getReq = require('./routes/getReq.js');
var postReq = require('./routes/postReq.js');
//passing in app and Post
getReq(app,models.post(sequelize));
postReq(app,models.post(sequelize));

app.listen(3000)
