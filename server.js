var mysql = require('mysql')
var express = require('express')
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
// var controllers = require('./controllers');
// controllers.set(app);
const Sequelize = require('sequelize');
app.use(bodyParser.json())



// var routing = require('./controllers/index');


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



// routing.routingHolder();
//defining the tables

var Post = require('./routes/tables.js')(sequelize);
Post.findAll({ include: [{ all: true }] }).then(posts => {
  console.log(posts)
  })

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

var Subs = sequelize.define('subreddits',{
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING
  },
  subscribers: {
    type: Sequelize.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
})
var Users = sequelize.define('users',{
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
})
var Comments = sequelize.define('comments',{
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  userPostedId: {
    type: Sequelize.INTEGER
  },
  body: {
    type: Sequelize.STRING
  },
  upvotes: {
    type: Sequelize.INTEGER
  },
  commentTree: {
    type: Sequelize.INTEGER
  },
  postId: {
    type: Sequelize.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
})

//~~~~~~~~~~~~~~
var Moderators = sequelize.define('moderators',{
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  userId: {
    type: Sequelize.INTEGER
  },
  subredditId: {
    type: Sequelize.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
})
// ~~~~~~~~~~~~~~~~
// moderator association
Subs.hasMany(Moderators)
Moderators.belongsTo(Subs)
Users.hasMany(Moderators)
Moderators.belongsTo(Users,{as:'user'})

Post.hasMany(Comments)
Comments.belongsTo(Post, {as:'post'})
Comments.belongsTo(Users,{as:'userPosted'})




//the view engine is being set as jade for now
app.set('view engine', 'jade')
//sends the client all the files in the public folder
app.use(express.static('public'))
var getReq = require('./routes/getReq.js');
var postReq = require('./routes/postReq.js');
//passing in app and Post
getReq(app,Post);
postReq(app,Post);



app.listen(3000)
