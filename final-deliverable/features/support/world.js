var webdriverjs = require('webdriverjs'),
    config    = require('./config');

var expect = require('chai').expect;
var assert = require('chai').assert;
var should = require('chai').should();

var client = webdriverjs.remote({
  desiredCapabilities: {
    browserName: 'phantomjs'
  }, 
  logLevel: 'silent'
});

client.init();

// login to wordpress only once

client.url(config.loginPageUrl)
  .setValue("#user_login", config.username)
  .setValue("#user_pass", config.password)
  .submitForm("#loginform", function(err) {
    console.log('login error: ' + err);
    expect(err).to.be.null;
    console.log("submitted form");
  });

var World = function World(callback) {
  var my = this;

  my.config = config;

  my.assert = assert;
  my.expect = expect;
  my.should = should;

  my.client = client;

  my.client.call(callback);

};

exports.World = World;
