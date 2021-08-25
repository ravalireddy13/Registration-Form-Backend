'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'ravali.cayi3xbd06qn.us-east-2.rds.amazonaws.com',
    user     : 'root',
    password : 'password',
    database : 'Users'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;

//module.exports = db;