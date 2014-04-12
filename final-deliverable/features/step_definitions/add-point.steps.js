'use strict';
 
var sharedSteps = module.exports = function() {
  this.World = require('../support/world').World;
  var should = this.should;

  this.When(/^I have satisfied the required fields$/, function(next) {
    var my = this;

    // arbitrarily click the first background, first text color and define point position
    my.client
      .click('#acf-wtm_background_color .color-swatcher a:first-child')
      .click('#acf-wtm_font_color .color-swatcher a:first-child')
      .setValue('#acf-wtm_coord_percents .coordpicker-container input', "{'x_percent':'0.3','y_percent':'0.3'}", function(err) {
        // [Error: [setValue("#acf-wtm_coord_percents .coordpicker-container input","{'x_percent':'0.3','y_percent':'0.3'}")] <= [elementIdClear("5")] <= An unknown server-side error occurred while processing the command.]
        my.expect(err).to.be.null;
      })
      .call(next);
  });

  this.Then(/"([^"]*)" should contain "([^"]*)"$/, function (selector, value, next) {
    var my = this;

    // contents of selector should equal value
    my.client.getText(selector, function(err, text) {
        my.expect(err).to.be.null;
        text.should.equal(value);
    }).call(next);
  });

  this.Then(/value of "([^"]*)" should be "([^"]*)"$/, function (selector, value, next) {
    var my = this;

    // contents of selector should equal value
    my.client.getValue(selector, function(err, myValue) {
        my.expect(err).to.be.null;
        myValue.should.equal(value);
    }).call(next);
  });

};
