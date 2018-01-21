module.exports = function(app,Post){
  app.get('/', function(req, res){
    //the index.jade file has to be in views folder
    Post.findAll().then(posts => {
      res.render('index', {posts})
    })
  })

  app.get('/posts',function(req,res){
    Post.findAll({ include: [{ all: true }] }).then(posts => {
      res.render('moderators', {testing:posts})
      })
  })

  app.get('/posts/:variable/comments',function(req,res){
    Post.findAll({ include: [{ all: true }] }).then(posts => {
      res.render('comment', {testing: posts[req.params.variable].comments})
      })
  })
}
