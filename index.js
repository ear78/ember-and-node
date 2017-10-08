var express = require('express');
var mysql = require('mysql');

//CREATE CONNECTION TO mysql
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12345',
    database : 'emberNode',
    port : 8889
});

//CONNECTION TO DB
db.connect(function(err){
    if(err) throw err.stack;
    console.log('mysql connected...');
});

// EXPRESS VARIABLE AS APP
var app = express();

// STATIC FILES LOCATION FOR SERVING
app.use(express.static(__dirname + '/public'));



// app.get('/posts', function(req,res){
//     var sql = "INSERT INTO posts (id, title, body, author) VALUES (id, 'Post 1', 'This is the body of post 1', 'Elliot R')";
//     db.query(sql, function(err, result){
//         if(err) throw err;
//         console.log(result);
//         res.send('Post was created...');
//     })
// })

// app.get('/about', function(req,res){
//     res.send('This is the about route!');
// })
// app.get('/', function(req,res){
//     res.send('hello from the index!!!');
// })



// PORT LISTENING ON NODE
app.listen('4300', function(){
    console.log('running on port 4300...');
})
