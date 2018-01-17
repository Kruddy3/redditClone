var mysql = require('mysql')
var express = require('express')
var path = require('path');


var app = express();

//sends the client all the files in the public folder
app.use(express.static('public'))

//at the home directory we serve the index.html file
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
})

//db login info
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tipper',
  database: 'redditisfornerds'
})

//connecting to db
connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')

  // connection.query('CREATE TABLE people(id int primary key AUTO_INCREMENT, name varchar(255), age int, address text)', function(err, result) {
  // you only need to run this the first time as after that the table already exists
    if (err) throw err
    //insert into db
    connection.query('INSERT INTO people (name, age, address) VALUES (?, ?, ?)', ['Larry', '41', 'California, USA'], function(err, result) {
      if (err) throw err
      //getting data from the server
      connection.query('SELECT * FROM people', function(err, results) {
        if (err) throw err
        console.log(results[1].id)
        console.log(results[1].name)
        console.log(results[1].age)
        console.log(results[1].address)
      })
    })
  // })
})
app.listen(3000)
