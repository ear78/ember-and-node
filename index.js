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


app.get('/api/rentals', function(req, res){
    var sql = "SELECT * FROM rentals";
    db.query(sql, function(err,result){
        if(err) throw err.stack;
        console.log(result);
        res.send(result);
    })
})




// PORT LISTENING ON NODE
app.listen('4300', function(){
    console.log('running on port 4300...');
})
