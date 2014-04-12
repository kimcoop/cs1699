'use strict';
 
var sharedSteps = module.exports = function() {
  this.World = require('../support/world').World;

  this.Given(/^I am on the page "([^"]*)"$/, function(url, next) {
    this.client
      .url(this.joinURL(this.config.baseURL, url))
      .call(next);
  });

  this.When(/^I enter the value "([^"]*)" in the input element "([^"]*)"$/, function(value, selector, next) {
    this.client
      .setValue(selector, value)
      .call(next);
  });

  this.When(/^I click "([^"]*)"$/, function(selector, next) {
    this.client
      .click(selector)
      .call(next);
  });

};
