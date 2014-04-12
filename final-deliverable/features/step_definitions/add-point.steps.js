'use strict';
 
var sharedSteps = module.exports = function() {
  this.World = require('../support/world').World;
  var should = this.should;

  var getIndex = function(index) {
    if (index == 'first') {
      return 1;
    } else if (index == 'second') {
      return 2;
    } else if (index == 'third') {
      return 3;
    } else if (index == 'fourth') {
      return 4;
    }
  }

  this.When(/^I have satisfied the required fields$/, function(next) {
    var my = this;

    // arbitrarily click the first background, first text color and define point position
    my.client
      .click('#acf-wtm_background_color .color-swatcher a:first-child')
      .click('#acf-wtm_font_color .color-swatcher a:first-child')
      .setValue('#acf-wtm_coord_percents input', '{"x_percent":"0.323","y_percent":"0.102"}', function(err) {
        my.expect(err).to.be.null;
      })
      .call(next);
  });

  this.When(/^I click on the (first|second|third|fourth) color swatch of "([^"]*)"$/, function(index, selector, next) {
    this.client
      .click(selector+' :nth-child('+getIndex(index)+')')
      .call(next);
  });

  this.Then(/"([^"]*)" should contain "([^"]*)"$/, function (selector, value, next) {
    var my = this;

    my.client.getText(selector, function(err, text) {
      my.expect(err).to.be.null;
      text.should.equal(value);
    }).call(next);
  });

  this.Then(/value of "([^"]*)" should be "([^"]*)"$/, function (selector, value, next) {
    var my = this;

    my.client.getValue(selector, function(err, myValue) {
      my.expect(err).to.be.null;
      myValue.should.equal(value);
    }).call(next);
  });

  this.Then(/value of "([^"]*)" should be '([^']*)'$/, function (selector, value, next) {
    var my = this;

    my.client.getValue(selector, function(err, myValue) {
      my.expect(err).to.be.null;
      myValue.should.equal(value);
    }).call(next);
  });

  this.Then(/^the (first|second|third|fourth) color swatch of "([^"]*)" should have the class "([^"]*)"$/, function (index, selector, expectedClass, next) {
    var my = this;

    my.client.getAttribute(selector+' :nth-child('+getIndex(index)+')', 'class', function(err, observedClass) {
      my.expect(err).to.be.null;
      observedClass.should.equal(expectedClass);
    }).call(next);
  });

};
