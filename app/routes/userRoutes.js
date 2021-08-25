'use strict';
module.exports = function(app) {
  var user = require('../controllers/userController');

  // user Routes
  
   app.post("/user",user.create_a_user);
   app.get("/user",user.list_all_users)
}