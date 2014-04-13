var webdriverjs = require('webdriverjs'),
    config      = require('./config');

var expect = require('chai').expect;
var assert = require('chai').assert;
var should = require('chai').should();

var translate = function(term) {
    // we may need to translate the term based on our config (if it's something environment-specific)
  var flag = config.flag,
    flagIndex = term.indexOf(flag);
  if (flagIndex > -1) {
    return config.translations[ term.slice(flagIndex + flag.length) ];
  }
  return term;
  
}

// joins a relative path with a base URL
var getAbsoluteURL = function(relative) {

  relative = translate(relative); // may need to translate

  var slash = (relative.substr(0,1) == '/') ? '' : '/';
  return config.baseURL + slash + relative;
}

var client = webdriverjs.remote({
  desiredCapabilities: {
    browserName: 'phantomjs'
  }, 
  logLevel: 'silent'
});

client.init();

// login to wordpress only once

client.url(getAbsoluteURL('wp-login.php'))
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

  this.getAbsoluteURL = getAbsoluteURL;
  this.translate = translate;

  this.client.call(next);

};

exports.World = World;
