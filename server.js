var cors = require('cors');
var express = require('express');
var app = express();

app.use(cors());


app.listen(80, function () {
console.log('CORS-enabled web server listening on port 80')
})
bodyParser = require('body-parser');
port = 3000;
const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
host: 'ravali.cayi3xbd06qn.us-east-2.rds.amazonaws.com',
user: 'root',
password: 'password',
database: 'Users'

});

// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/userRoutes'); //importing route
routes(app); //register the route

