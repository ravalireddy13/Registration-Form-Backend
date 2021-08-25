'use strict';

var User = require('../model/userModel.js');

exports.list_all_users = (req, res) => {
  User.getAllUsers(function(err, user) {

    if (err)
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving users."
    });
  else res.send(user);
  });
};



exports.create_a_user = function(req, res) {
   
  
  const new_user = new User(
     req.body
  );
  
  User.createUser(new_user, function(err, user) {
    
    if (err){
      res.send(err);}
    else res.json(...user);
  });
}


