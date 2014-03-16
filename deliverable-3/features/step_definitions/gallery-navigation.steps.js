'use strict';

module.exports = function() {
  this.World = require("../support/world.js").World; // overwrite default World constructor

  var Config = {
    url: 'http://amoscato.com/public/deliverable-3/'
  }
  
  this.Given(/valid fancyBox gallery/, function(callback) {
    this.browser.visit(Config.url)
      .then(function() {
        console.log(this.browser.html());
      })
  });

  this.Given(/open fancyBox/, function(callback) {
    this.browser.visit(Config.url)
      .then(function() {
        // make sure we have a #gallery
        assert.ok(this.browser.query('#gallery'));
        // make sure we have 0 open fancyBoxes
        assert.lengthOf(this.browser.body.queryAll('.fancybox-overlay'), 0);
        return this.browser.clickLink('#gallery .fancy:first-child');
      })
      .then(function() {
        // now we have 1 open fancyBox
        assert.lengthOf(this.browser.body.queryAll('.fancybox-overlay'), 1);
        console.log(this.browser.html());
      });
    
    callback.pending();
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