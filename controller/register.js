"use strict";

var User = require('../models/user');

module.exports = function (req, res) {

  let retMsg = {
    success: false,
    msg: ''
  };

  if (!req.body.username) {
    retMsg.msg = 'username is required';
    return res.json(retMsg);
  }

  if (!req.body.email) {
    retMsg.msg = 'email is required';
    return res.json(retMsg);
  }

  if (!req.body.password) {
    retMsg.msg = 'password is required';
    return res.json(retMsg);
  }

  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;

  let filter = { username: username };

  User.findOne(filter, (err1, doc1) => {
    if (err1) {
      retMsg.msg = 'DB error';
      return res.json(retMsg);
    }

    if (doc1) {
      retMsg.msg = `username "${username}" already exist`;
      return res.json(retMsg);
    }

    filter = { email: email };
    User.findOne(filter, (err2, doc2) => {
      if (err2) {
        retMsg.msg = 'DB error';
        return res.json(retMsg);
      }

      if (doc2) {
        retMsg.msg = `email "${email}" already exist`;
        return res.json(retMsg);
      } else {
        let user = new User();
        user.username = username;
        user.password = password;
        user.email = email;

        user.save((err3) => {
          if (err3) {
            retMsg.msg = 'DB error';
            return res.json(retMsg);
          }
          retMsg.msg = 'Register success';
          retMsg.success = true;
          return res.json(retMsg);
        });
      }
    });

  });
}