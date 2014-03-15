'use strict';

module.exports = function() {
  this.World = require("../support/world.js").World; // overwrite default World constructor
  
  this.Given(/^an open fancyBox$/, function (callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.When(/^I click the close button$/, function (callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^the fancyBox will close$/, function (callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.When(/^I click the semi\-transparent overlay$/, function (callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.When(/^I press the escape key$/, function (callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

};