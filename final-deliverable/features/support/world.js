var webdriver = require('webdriverjs'),
    assert    = require('chai').should(),
    config    = require('./config');

var World = function World(callback) {
  var my = this;

  my.webdriver = webdriver;
  my.config = config;

  // initialize webdriverjs
  my.client = my.webdriver.remote({desiredCapabilities: {browserName: 'phantomjs'}, logLevel: 'silent'});
  my.client.init();

  // login to wordpress
  my.client
    .url(my.config.loginPageUrl)
    .getTitle(function(err, title) {
      // (err === null).should.be(false);

      if (title === my.config.loginPageTitle) {
        my.client.setValue("#user_login", my.config.username);
        my.client.setValue("#user_pass", my.config.password);
        my.client.submitForm("#loginform", function(err) {
          // (err === null).should.be(false);
          console.log("submitted form");
          
          my.client.getTitle(function(err, title) {
            // (err === null).should.be(false);
            console.log(title);
            callback();
          });
        });
      } else {
        callback();
      }
    });

};

exports.World = World;
