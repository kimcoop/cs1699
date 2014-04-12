'use strict';

 
var sharedSteps = module.exports = function() {

  this.World = require('../support/world').World;

  var should = this.should,
      expect = this.expect;

  this.Given(/^I clear the value of the input element "([^"]*)"$/, function (selector, next) {
    this.client
      .setValue(selector, "")
      .call(next);
  });

  this.Given(/^I submit the form "([^"]*)"$/, function (selector, next) {
    this.client
      .submitForm(selector)
      .call(next);
  });

  this.When(/^I visit the page "([^"]*)"$/, function (url, next) {
    this.client
      .url(this.getAbsoluteURL(url))
      .call(next);
  });

  this.Then(/^I should see "([^"]*)" as the source of the element "([^"]*)"$/, function (value, selector, next) {
    var my = this;
    var should = this.should;
    this.client
      .waitFor(selector, 500, function(err) {
        my.expect(err).to.be.null;
      })
      .getAttribute(selector, 'src', function(error, currValue) {
        currValue.should.equal(value);
      })
      .call(next);
  });

  this.Then(/^the CSS "([^"]*)" property of the element "([^"]*)" should be "([^"]*)"$/, function (property, selector, value, next) {
    var should = this.should;
    this.client
      .waitFor(selector, 500)
      .getCssProperty(selector, property, function(error, val) {
        val.should.equal(value);
      })
      .call(next);
  });

}
