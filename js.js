var mysql = require('mysql')
var express = require('express')
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
// var controllers = require('./controllers');
// controllers.set(app);
const Sequelize = require('sequelize');
app.use(bodyParser.json())



var routing = require('./controllers/index');


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
routing.routingHolder();
//defining the tables
// var Post = sequelize.define('posts',{
//   id: {
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//     type: Sequelize.INTEGER
//   },
//   title: {
//     type: Sequelize.STRING
//   },
//   body: {
//     type: Sequelize.STRING
//   },
//   upvotes: {
//     type: Sequelize.INTEGER
//   },
//   category: {
//     type: Sequelize.STRING
//   },
//   link: {
//     type: Sequelize.STRING
//   },
//   createdAt: {
//     allowNull: false,
//     type: Sequelize.DATE
//   },
//   updatedAt: {
//     allowNull: false,
//     type: Sequelize.DATE
//   }
// })
//
// var Subs = sequelize.define('subreddits',{
//   id: {
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//     type: Sequelize.INTEGER
//   },
//   name: {
//     type: Sequelize.STRING
//   },
//   subscribers: {
//     type: Sequelize.INTEGER
//   },
//   createdAt: {
//     allowNull: false,
//     type: Sequelize.DATE
//   },
//   updatedAt: {
//     allowNull: false,
//     type: Sequelize.DATE
//   }
// })
// var Users = sequelize.define('users',{
//   id: {
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//     type: Sequelize.INTEGER
//   },
//   username: {
//     type: Sequelize.STRING
//   },
//   password: {
//     type: Sequelize.STRING
//   },
//   createdAt: {
//     allowNull: false,
//     type: Sequelize.DATE
//   },
//   updatedAt: {
//     allowNull: false,
//     type: Sequelize.DATE
//   }
// })
// var Comments = sequelize.define('comments',{
//   id: {
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//     type: Sequelize.INTEGER
//   },
//   userPostedId: {
//     type: Sequelize.INTEGER
//   },
//   body: {
//     type: Sequelize.STRING
//   },
//   upvotes: {
//     type: Sequelize.INTEGER
//   },
//   commentTree: {
//     type: Sequelize.INTEGER
//   },
//   postId: {
//     type: Sequelize.INTEGER
//   },
//   createdAt: {
//     allowNull: false,
//     type: Sequelize.DATE
//   },
//   updatedAt: {
//     allowNull: false,
//     type: Sequelize.DATE
//   }
// })
//
// //~~~~~~~~~~~~~~
// var Moderators = sequelize.define('moderators',{
//   id: {
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//     type: Sequelize.INTEGER
//   },
//   userId: {
//     type: Sequelize.INTEGER
//   },
//   subredditId: {
//     type: Sequelize.INTEGER
//   },
//   createdAt: {
//     allowNull: false,
//     type: Sequelize.DATE
//   },
//   updatedAt: {
//     allowNull: false,
//     type: Sequelize.DATE
//   }
// })
// // ~~~~~~~~~~~~~~~~
// // moderator association
// Subs.hasMany(Moderators)
// Moderators.belongsTo(Subs)
// Users.hasMany(Moderators)
// Moderators.belongsTo(Users,{as:'user'})
//
// //~~~~~~~~~~~~~~~~~
// //posts
// // Post.belongsTo(Subs)
// // Subs.hasMany(Post)
//
// //~~~~~~~~~~~~~~~~~
// // comments
// Post.hasMany(Comments)
// Comments.belongsTo(Post, {as:'post'})
// Comments.belongsTo(Users,{as:'userPosted'})
//
//
// // Post.findAll().then(posts => {
// //   console.log(posts)
// // })
// Sequelize.sync
// var testing;
//
// Post.findAll({ include: [{ all: true }] }).then(posts => {
//   testing = (posts);
//   console.log(JSON.stringify(testing, null, 2))
//   // res.send(JSON.stringify(testing, null, 2))
//   })
// // ~~~~~~~~~~~~~~~~









//the view engine is being set as jade for now
app.set('view engine', 'jade')

//sends the client all the files in the public folder
app.use(express.static('public'))
// app.use("public", express.static(__dirname + 'public'));
//at the home directory we serve the index.html file


      // //db login info
      // var connection = mysql.createConnection({
      //   host: 'localhost',
      //   user: 'root',
      //   password: 'tipper',
      //   database: 'redditisfornerds'
      // })
      // var names,age,address;
      // //connecting to db
      // connection.connect(function(err) {
      //   if (err) throw err
      //   console.log('You are now connected...')
      //
      // })




// var controllers = require('./controllers ');
// controllers.set(app);
//
// var path = require('path')
// app.get('/', function(req, res){
//   //the index.jade file has to be in views folder
//   Post.findAll().then(posts => {
//
//     res.render('index', {posts})
//   })
//   app.use(express.static(path.join(__dirname, 'public')));
//
//
// })
//
// app.get('/posts',function(req,res){
//   Post.findAll({ include: [{ all: true }] }).then(posts => {
//     testing = (posts);
//     // console.log(testing[2].moderators)
//     // res.send(JSON.stringify(testing, null, 2))
//     res.render('moderators', {testing})
//     console.log(testing)
//     })
// })
// var placeholder;
// app.get('/posts/:variable/comments',function(req,res){
//   Post.findAll({ include: [{ all: true }] }).then(posts => {
//     testing = (posts[req.params.variable].comments);
//     // console.log(testing[2].moderators)
//     // res.send(JSON.stringify(testing, null, 2))
//     app.use("public", express.static(__dirname + '/public'));
//     res.render('comment', {testing})
//     })
//
//     console.log(req.params.variable)
// })
//
// app.post('/posts',function(req,res){
//   Post.sync().then(function() {
//     var data = req.body;
//     Post.create(data).then(function(post){
//    //     //we are creating an entry for the data then logging to console the results
//        console.dir(post.get())
//      })
//    res.send(JSON.stringify(req.body, null, 2));
//
//   })
// })

app.listen(3000)
