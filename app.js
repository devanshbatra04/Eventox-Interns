const express                = require('express'),
    bodyParser               = require('body-parser'),
    ejs                      = require('ejs'),
    mongoose                 = require('mongoose');

mongoose.connect("mongodb://dev:dev@ds237620.mlab.com:37620/evenox");
var Intern = require('./models/intern');

var app = express();

app.set('view engine', ejs);
app.use(bodyParser.urlencoded({extended: true}));
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('intern/landing.ejs');
});
app.get('/apply', function(req,res){
    res.render('intern/ApplyForm.ejs')
});
app.post('/apply', function(req, res){
    Intern.create(applicant, function(err, applied){
        if(err) {
            console.log(err);
        } else {
            res.redirect("/applied");
        }
    });
});

app.listen(5002, function(req,res){
    console.log("listening on port " + 5002);
});
