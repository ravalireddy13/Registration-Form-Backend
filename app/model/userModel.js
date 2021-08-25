'user strict';
const sql = require('./db.js');

//User object constructor
var User = function(user){
    this.firstName = user.firstName 
   this.lastName=  user.lastName 
    this.address1= user.address1 
    this.address2= user.address2 
    this.city= user.city 
    this.state= user.state 
    this.country= user.country 
    this.zip= user.zip 
   this.date = user.date 
}

User.createUser = function(newUser, result) {
    console.log(newUser)
    sql.query("INSERT INTO users set ?", newUser, function (res, err) {
        if (res) {
            console.log(res);
            result(null, res);

        }
        else {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    });
};
User.getAllUsers = result =>  {
    sql.query("Select * from users",  (res, err) => {
        if (res) {
            console.log('user : ', res);

            result(null, res);
        }
        else {
            console.log("error: ", err);
            result(null, err);
            return;
        }

    });
};
module.exports = User;