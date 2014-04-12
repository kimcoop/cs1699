var webdriver = require('webdriverjs'),
    assert    = require('assert'),
    config    = require('./config');

var World = function World(callback) {
  var my = this;

  my.webdriver = webdriver;
  my.assert = assert;
  my.config = config;

  // initialize webdriverjs
  my.client = my.webdriver.remote({desiredCapabilities: {browserName: 'phantomjs'}, logLevel: 'silent'});
  my.client.init();

  // login to wordpress
  my.client
    .url('http://labs.amoscato.com/cs1699-wordpress/wp-login.php')
    .getTitle(function(err, title) {
      assert(err === null, 'getTitle() returns with an error');

      if (title === "CS1699 Software Testing › Log In") {
        my.client.setValue("input[name=log]", my.config.username);
        my.client.setValue("input[name=pwd]", my.config.username);
        my.client.submitForm("form", function(err) {
          assert(err === null, 'submitForm() returns with an error');
          /*
          console.log("submitted form");
          
          my.client.getTitle(function(err, title) {
            assert(err === null, 'getTitle() returns with an error');
            console.log(title);
          });
          */
        });
      }
    });

  callback();
};

exports.World = World;
