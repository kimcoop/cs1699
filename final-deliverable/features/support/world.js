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

  // joins a relative path with a base URL
  my.joinURL = function(base, relative) {
    var slash = (relative.substr(0,1) == '/') ? '' : '/';
    return base + slash + relative;
  }

  // login to wordpress
  my.client
    .url(my.joinURL(my.config.baseURL, 'wp-login.php'))
    .setValue("#user_login", my.config.username)
    .setValue("#user_pass", my.config.password)
    .submitForm("#loginform", function(err) {
      my.expect(err).to.be.null;
      my.client.call(callback);
    });

};

exports.World = World;
