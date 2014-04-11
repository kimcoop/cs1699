'use strict';

var webdriverjs = require('webdriverjs'),
    assert      = require('assert');
 
var sharedSteps = module.exports = function(){
 
    var client    = webdriverjs.remote({ desiredCapabilities: {browserName: 'phantomjs'}, logLevel: 'silent' }),
        tmpResult = null;
    client.init();
 
    this.Given(/^I go on the website "([^"]*)"$/, function(url, next) {
        client
            .url(url)
            .call(next);
    });
 
    this.When(/^I use getElementSize\(\) on the element "([^"]*)"$/, function(className, next) {
        client
            .getElementSize(className, function(err, result) {
                assert(err === null, 'command getElementSize() returns with an error');
                tmpResult = result;
                next();
            });
    });
 
    this.When(/^I use getTitle\(\) to get the title of this website$/, function(next) {
        client
            .getTitle(function(err, title) {
                assert(err === null, 'command getTitle() returns with an error');
                tmpResult = title;
                next();
            });
    });
 
    this.When(/^I use getElementCssProperty\(\) to get the "([^"]*)" attribute of an element with "([^"]*)" "([^"]*)"$/, function(attribute, findBy, cssSelector, next) {
        client
            .getElementCssProperty(findBy, cssSelector, attribute, function(err, result) {
                assert(err === null, 'command getElementCssProperty() returns with an error');
                tmpResult = result;
                next();
            });
    });
 
    this.Then(/^I should get a width of "([^"]*)" and height of "([^"]*)"$/, function(width, height, next) {
        assert(tmpResult.width  == width , 'width of element is ' + tmpResult.width + ' but should be ' + width);
        assert(tmpResult.height == height, 'height of element is ' + tmpResult.width + ' but should be ' + height);
        next();
    });
 
    this.Then(/^the command should return "([^"]*)"$/, function(result, next) {
        assert(tmpResult == result , ' result of command is "'+ tmpResult + '" but should be "'+ result);
        next();
    });
};

/*
module.exports = function() {
  this.World = require("../support/world.js").World;
  
  this.When(/^I compare the dates$/, function(callback) {

    var webdriver = require('selenium-webdriver');

    var driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();

    driver.get('http://www.google.com');
    driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
    driver.findElement(webdriver.By.name('btnG')).click();
    driver.wait(function() {
     return driver.getTitle().then(function(title) {
       console.log(title);
     });
    }, 1000);
    
    callback.pending();
  });


  this.Then(/^it should indicate that the first date is (before|the same as|after) the second date$/, function(compare, callback) {
    
    callback.pending();
  });

};
*/