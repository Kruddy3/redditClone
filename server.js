const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// the view engine is being set as jade for now
app.set('view engine', 'jade');
// sends the client all the files in the public folder
app.use(express.static('public'));
const getReq = require('./routes/post.js');
// passing in app and Post
getReq(app);

app.listen(3001);
