var webdriver = require('webdriverjs'),
    chai      = require('chai'),
    config    = require('./config');

var World = function World(callback) {
  var my = this;

  my.webdriver = webdriver;
  my.config = config;

  // initialize webdriverjs
  my.client = my.webdriver.remote({desiredCapabilities: {browserName: 'phantomjs'}, logLevel: 'silent'});
  my.client.init();
  my.assert = chai.assert;
  my.expect = chai.expect;
  my.should = chai.should();

  // login to wordpress
  my.client
    .url(my.config.loginPageUrl)
    .setValue("#user_login", my.config.username)
    .setValue("#user_pass", my.config.password)
    .submitForm("#loginform", function(err) {
      my.expect(err).to.be.null;
      console.log("submitted form");
      my.client.call(callback);
    });

};

exports.World = World;
