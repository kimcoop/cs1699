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
                    console.log('need to login');
                    client.setValue("input[name=log]", config.username);
                    client.setValue("input[name=pwd]", config.username);
                    client.submitForm("form", function() {
                        // send back to plugin settings page 
                        client.url(url);
                    });
                }
            })

        client.call(next);
    });


    this.When(/^I use enter the value "([^"]*)" on the input element "([^"]*)" and save$/, function (value, selector, next) {

        client.setValue(selector, value);
        client.submitForm('.form-wtm');
        next();

    });

    this.Then(/^The source of the element "([^"]*)" should be "([^"]*)"$/, function (selector, value, next) {
        
        assertEquals(value, client.getAttribute(selector, src));
        next();

    });

};