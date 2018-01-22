var mysql = require('mysql')
var express = require('express')
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json())
var Sequelize = require('sequelize');
//sequelize connection info


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

// // moderator association havent added these yet~~~~~~~~~~~~
// models.subreddit.hasMany(models.moderator)
// models.moderators.belongsTo(models.subreddit)
// Users.hasMany(Moderators)
// Moderators.belongsTo(Users,{as:'user'})

//the view engine is being set as jade for now
app.set('view engine', 'jade')
//sends the client all the files in the public folder
app.use(express.static('public'))
var getReq = require('./routes/post.js');
//passing in app and Post
getReq(app);

app.listen(3001)
