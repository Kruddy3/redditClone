var models  = require('../models');

module.exports = function(app){
  app.get('/', function(req, res){
    models.posts.findAll().then(function(postsData) {
      res.render('index', {postsData})
    });
  })

  app.get('/posts',function(req,res){
    models.posts.findAll({ include: [{ all: true }] }).then(function(testing) {
      res.render('moderators', {testing})
    });
  })

  app.get('/posts/:variable/comments',function(req,res){
    models.posts.findAll({ include: [{ all: true }] }).then(function(testing) {
      console.log('logging to console', testing)
      //res.render('moderators', {testing})
    });
    // Post.findAll({ include: [{ all: true }] }).then(posts => {
    //   res.render('comment', {testing: posts[req.params.variable].comments})
    //   })
  })
  app.post('/posts',function(req,res){
    Post.sync().then(function() {
      var data = req.body;
      Post.create(data).then(function(post){
       })
     res.send(JSON.stringify(req.body, null, 2));
    })
  })
}
