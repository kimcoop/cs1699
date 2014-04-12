var webdriverjs = require('webdriverjs'),
    config      = require('./config');

var expect = require('chai').expect;
var assert = require('chai').assert;
var should = require('chai').should();

// joins a relative path with a base URL
var joinURL = function(base, relative) {
  var slash = (relative.substr(0,1) == '/') ? '' : '/';
  return base + slash + relative;
}

var client = webdriverjs.remote({
  desiredCapabilities: {
    browserName: 'phantomjs'
  }, 
  logLevel: 'silent'
});

client.init();

// login to wordpress only once

client.url(joinURL(config.baseURL, 'wp-login.php'))
  .setValue("#user_login", config.username)
  .setValue("#user_pass", config.password)
  .submitForm("#loginform", function(err) {
    expect(err).to.be.null;
  });

var World = function World(next) {

  this.config = config;

  this.assert = assert;
  this.expect = expect;
  this.should = should;

  this.client = client;

  this.joinURL = joinURL;

  this.client.call(next);

};

exports.World = World;
