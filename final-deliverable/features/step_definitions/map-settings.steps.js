'use strict';

//var should = require('chai').should();
 
var sharedSteps = module.exports = function() {
  this.World = require('../support/world').World;
  var should = this.should;

  var settings = {
        title: 'Map Points Plugin ‹ CS1699 Software Testing — WordPress'
  };

  this.When(/^I use enter the value "([^"]*)" on the input element "([^"]*)" and save$/, function (value, selector, next) {

    this.client.setValue(selector, value);
    this.client.submitForm('.form-wtm');
    next();

  });

  this.Then(/^The source of the element "([^"]*)" should be "([^"]*)"$/, function (selector, value, next) {
    
    this.client.getAttribute(selector, 'src', function(err, srcValue) {
        srcValue.should.equal(value);
        next();
    });

  });

};
