//var tag_ctrl = require('account.js');

//var config = require('../config').config;
//var EventProxy = require('eventproxy').EventProxy;
require('ejs');

exports.index = function (req, res, next) {

  console.log('here');
  res.render('index');

};