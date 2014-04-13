'use strict';
 
var sharedSteps = module.exports = function() {
  this.World = require('../support/world').World;
  var should = this.should;

  this.Given(/^I am on the page "([^"]*)" and at least one travel point exists$/, function (arg1, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.When(/^I hover over the element "([^"]*)"$/, function (arg1, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^the CSS "([^"]*)" property of the element "([^"]*)" should not be "([^"]*)"$/, function (arg1, arg2, arg3, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

}