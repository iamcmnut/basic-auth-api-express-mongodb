var User = require('../models/user');

module.exports = function (req, res) {

  let retMsg = {
    success: false,
    msg: ''
  };

  if (!req.body.username) {
    retMsg.msg = 'username is required';
    res.json(retMsg);
  }

  if (!req.body.password) {
    retMsg.msg = 'password is required';
    res.json(retMsg);
  }

  let username = req.body.username;
  let password = req.body.password;

  let filter = {
    username: username,
    password: password
  };

  User.findOne(filter, (err, doc) => {
    if (err) {
      retMsg.msg = 'DB error';
      return res.json(retMsg);
    }

    if (doc) {
      retMsg.msg = 'login success';
      retMsg.success = true;
      return res.json(retMsg);
    } else {
      retMsg.msg = 'username or password are mismatched';
      return res.json(retMsg);
    }
  });
}