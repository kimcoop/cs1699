'use strict';

module.exports = function() {
  this.World = require("../support/world.js").World; // overwrite default World constructor
  
  this.Given(/valid fancyBox gallery/, function(callback) {
    this.browser.visit('http://amoscato.com/public/deliverable-3/', callback);
  });

  this.Given(/open fancyBox/, function(callback) {
    var browser = this.browser;

    this.browser.clickLink('#gallery .fancy:first-child');

    this.browser.wait(this.browser.window.myTest, function() {
      console.log(browser.window.myTest);
      console.log(browser.html());
      callback.pending();
    });
    
  });


  this.When(/^I press the (.*) keyboard key$/, function(key, callback) {
    switch(key) {
      case 'left arrow':
        //this.browser.keyPress(37);
        break;
      case 'right arrow':
        break;
      default:
        break;
    }
    callback.pending();
  });

  this.When(/^I click the (.*) button$/, function(button, callback) {
    var sel;
    switch(button) {
      case 'previous':
        sel = 'fancybox-prev';
        break;
      case 'next':
        sel = 'fancybox-next';
        break;
      default:
        break;
    }
    //this.browser.clickLink('.' + sel, callback);
    callback.pending();
  });


  this.Then(/^the fancyBox should advance to the (.*) item in the gallery$/, function(dir, callback) {
    callback.pending();
  });

};