'use strict';

module.exports = function() {
  this.World = require("../support/world.js").World; // overwrite default World constructor
  
  this.Given(/^a valid reference to Moment\.js$/, function (callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Given(/^today's date$/, function (callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.When(/^I add (\d+) hours to the date$/, function (arg1, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^I should see tomorrow's date$/, function (callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.When(/^I subtract (\d+) hours from the date$/, function (arg1, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^I should see yesterday's date$/, function (callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.When(/^I add (\d+) days to the date$/, function (arg1, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^I should see the date (\d+) week ago$/, function (arg1, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.When(/^I subtract (\d+) days from the date$/, function (arg1, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

};