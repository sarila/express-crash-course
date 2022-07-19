var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// var logger = function(req, res, next) {
//     console.log('Logging...');
//     next();
// }

// app.use(logger);

//View Engine middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Body Parser Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Static Path file
//Allows the static files inside public folder (frontend) 
app.use(express.static(path.join(__dirname, 'public')));

var users = [
    {
        id: 1,
        first_name: 'Sarila',
        last_name: 'Ngakhusi',
        address: 'Bhaktapur',
    },
    {
        id: 2,
        first_name: 'Himal',
        last_name: 'Simkhada',
        address: 'Kathmandu',
    },
    {
        id: 3,
        first_name: 'Jane',
        last_name: 'Doe',
        address: 'Lalitpur',
    },
]

app.get('/', function(req, res){
    res.render('index', {
        title: "Customer",
        users: users,
    });
});

app.listen(3000, function () {
    console.log('Server started on port 3000');
});