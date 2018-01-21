module.exports = function(app,Post){
  app.post('/posts',function(req,res){
    Post.sync().then(function() {
      var data = req.body;
      Post.create(data).then(function(post){
       })
     res.send(JSON.stringify(req.body, null, 2));
    })
  })
}
