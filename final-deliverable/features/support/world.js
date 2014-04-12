var webdriver = require('webdriverjs'),
    assert    = require('chai').should(),
    config    = require('./config');

var World = function World(callback) {
  var my = this;

  my.webdriver = webdriver;

  // @TODO - this should come from config somehow
  my.config = {
    username: 'admin',
    password: 'ehJdfudFr6Pu7hZ',
    mapImage: 'http://labs.amoscato.com/cs1699-wordpress/wp-content/uploads/2014/04/world.jpg',
    loginPageTitle: 'CS1699 Software Testing › Log In',
    loginPageUrl: 'http://labs.amoscato.com/cs1699-wordpress/wp-login.php'
  }

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
