'use strict';

module.exports = function() {
  this.World = require("../support/world.js").World; // overwrite default World constructor

  this.Given(/^a thumbnail\-sized image on a webpage$/, function (callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.When(/^I click the thumbnail image$/, function (callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^I should see a full\-size version of the image within the fancyBox$/, function (callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

};