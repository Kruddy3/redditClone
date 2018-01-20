var path = require('path')
var mysql = require('mysql')
var express = require('express')
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var tables = require('./tables');

tables.tables()

function routingHolder() {

  app.get('/', function(req, res){
    //the index.jade file has to be in views folder
    Post.findAll().then(posts => {

      res.render('index', {posts})
    })
    app.use(express.static(path.join(__dirname, 'public')));


  })

  app.get('/posts',function(req,res){
    Post.findAll({ include: [{ all: true }] }).then(posts => {
      testing = (posts);
      // console.log(testing[2].moderators)
      // res.send(JSON.stringify(testing, null, 2))
      res.render('moderators', {testing})
      console.log(testing)
      })
  })
  var placeholder;
  app.get('/posts/:variable/comments',function(req,res){
    Post.findAll({ include: [{ all: true }] }).then(posts => {
      testing = (posts[req.params.variable].comments);
      // console.log(testing[2].moderators)
      // res.send(JSON.stringify(testing, null, 2))
      app.use("public", express.static(__dirname + '/public'));
      res.render('comment', {testing})
      })

      console.log(req.params.variable)
  })

  app.post('/posts',function(req,res){
    Post.sync().then(function() {
      var data = req.body;
      Post.create(data).then(function(post){
     //     //we are creating an entry for the data then logging to console the results
         console.dir(post.get())
       })
     res.send(JSON.stringify(req.body, null, 2));

    })
  })

}
exports.routingHolder = routingHolder
