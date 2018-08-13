const express                = require('express'),
    bodyParser               = require('body-parser'),
    ejs                      = require('ejs');

var app = express();

app.set('view engine', ejs);
app.use(bodyParser.urlencoded({extended: true}));


app.listen(5002, function(req,res){
    console.log("listening on port " + 5002);
})
