'use strict';
 
var sharedSteps = module.exports = function() {
  this.World = require('../support/world').World;

  this.Given(/^I am on the page "([^"]*)"$/, function(url, next) {
    this.client
      .url(this.getAbsoluteURL(url))
      .call(next);
  });

  this.When(/^I enter the value "([^"]*)" on the input element "([^"]*)"$/, function(value, selector, next) {
    var my = this,
      translatedValue = this.translate(value);
    this.client
      .setValue(selector, translatedValue, function(err) {
        my.expect(err).to.be.null;
      })
      .call(next);
  });

  this.When(/^I enter the value '([^"]*)' on the input element "([^"]*)"$/, function(value, selector, next) {
    var my = this,
      translatedValue = this.translate(value);
    this.client
      .setValue(selector, translatedValue, function(err) {
        my.expect(err).to.be.null;
      })
      .call(next);
  });

  this.When(/^I click "([^"]*)"$/, function(selector, next) {
    this.client
      .click(selector)
      .call(next);
  });

  this.Then(/^"([^"]*)" should exist$/, function(selector, next) {
    var my = this;
    this.client
      .isVisible(selector, function(err, value) {
        my.expect(err).to.be.null;
        my.expect(value).to.be.true;
      })
      .call(next);
  });

};
