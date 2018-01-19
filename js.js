var mysql = require('mysql')
var express = require('express')
var path = require('path');


var app = express();

const Sequelize = require('sequelize');

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

//this is defining the post table
var Post = sequelize.define('posts',{
  id:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: Sequelize.STRING,
  body: Sequelize.TEXT,
  upvotes: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  category:Sequelize.STRING
})

//we're getting the Post table data
  //you can add {force:true} withing sync fucntion call to delete table if it exists
Post.sync().then(function() {
  var data = {
    title: 'Stale memes',
    body: 'This is the body of the post and it should go on for a little bit to make some room that is needed to make the room to make the post to make the space to make the post to make the space.'
  }
  Post.create(data).then(function(post){
    //we are creating an entry for the data then logging to console the results
    console.dir(post.get())
  })
})

// ~~~~~~~~~~~~~~~~~~~~~~
// we will be using body-parser as out middleware
// ~~~~~~~~~~~~~~~~~~~~~~
//express removed middleware so we add this
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


//the view engine is being set as jade for now
app.set('view engine', 'jade')

//sends the client all the files in the public folder
app.use(express.static('public'))

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

app.get('/', function(req, res){
  //the index.jade file has to be in views folder
  Post.findAll().then(posts => {
    res.render('index', {posts})
  })


})
app.post('/posts', function(req, res){
  res.send('Got a POST request')
})

app.listen(3000)
