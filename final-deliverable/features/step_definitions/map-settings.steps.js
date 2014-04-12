'use strict';
 
var sharedSteps = module.exports = function() {
  this.World = require('../support/world').World;

  this.Given(/^I am on the page "([^"]*)"$/, function(url, next) {
    
    /*
    this.client.setValue("#input-wtm-base-image", my.config.mapImage);
    this.client.submitForm('.form-wtm', function() {
        console.log( client.getTitle() );
        assertEquals(config.mapImage, client.getAttribute(".link-wtm-image img", src));
    });
    */

    this.client.call(next);

  });

  this.When(/^I use enter the value "([^"]*)" on the input element "([^"]*)" and save$/, function (value, selector, next) {

    this.client.setValue(selector, value);
    this.client.submitForm('.form-wtm');
    next();

  });

  this.Then(/^The source of the element "([^"]*)" should be "([^"]*)"$/, function (selector, value, next) {
    
    assertEquals(value, this.client.getAttribute(selector, src));
    next();

  });

};
