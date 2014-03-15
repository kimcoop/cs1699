'use strict';

module.exports = function() {
  this.World = require("../support/world.js").World; // overwrite default World constructor
  
  this.Given(/valid fancyBox gallery/, function(callback) {
    this.browser.visit('http://localhost', callback);
  });

  this.Given(/open fancyBox/, function(callback) {
    this.browser.clickLink('#gallery .fancy:first-child', callback);
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
        sel = 'fancybox-prev';
        break;
      default:
        break;
    }
    this.browser.clickLink('.' + sel, callback);
  });


  this.Then(/^the fancyBox should advance to the (.*) item in the gallery$/, function(dir, callback) {
    callback.pending();
  });

};