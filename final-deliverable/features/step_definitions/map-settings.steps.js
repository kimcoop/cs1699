'use strict';

var webdriverjs = require('webdriverjs'),
    assert      = require('assert'),
    config      = require('../support/config.js');
 
var sharedSteps = module.exports = function(){

    var client    = webdriverjs.remote({ desiredCapabilities: { browserName: 'phantomjs' }, logLevel: 'silent' }),
        tmpResult = null,
        config = this.config;

    client.init();
 
    this.Given(/^I am on the page "([^"]*)"$/, function(url, next) {
        client
            .url(url)
            .getTitle(function(title) {
                if (title === "CS1699 Software Testing › Log In") {
                    client.setValue("input[name=log]", config.username);
                    client.setValue("input[name=pwd]", config.username);
                    client.submitForm("form");
                }
            });

        client.setValue("#input-wtm-base-image", config.mapImage);
        client.submitForm('.form-wtm', function() {
            console.log( client.getTitle() );
            assertEquals(config.mapImage, client.getAttribute(".link-wtm-image img", src));
        });

        client.call(next);
    });
 


this.When(/^I use enter the value "([^"]*)" on the input element "([^"]*)" and save$/, function (arg1, arg2, next) {
  // express the regexp above with the code you wish you had
  next.pending();
});

this.Then(/^The source of the element "([^"]*)" should be "([^"]*)"$/, function (arg1, arg2, next) {
  // express the regexp above with the code you wish you had
  next.pending();
});
};