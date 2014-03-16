'use strict';

module.exports = function() {
  this.World = require("../support/world.js").World; // overwrite default World constructor
  
  this.Given(/valid fancyBox gallery/, function(callback) {
    var browser = this.browser, 
      should = this.should, 
      expect = this.expect;
    browser.visit(this.config.url)
      .then(function() {
        console.log('111111111111');
        browser.success.should.be.ok;
        if (browser.error) {
          console.dir('errors:',browser.errors);
        }
        browser.query('#gallery').should.exist;
      })
      .then(function() {
        console.log('2222222222222');
        callback();
      });
  });

  this.Given(/open fancyBox/, function(callback) {
      
    var browser = this.browser,
      fancyBoxIsLoaded = this.fancyBoxIsLoaded,
      fancyBoxIsOpen = this.fancyBoxIsOpen;

    var myWait = this.myWait;


    browser.clickLink('#gallery .fancy:first-child', function() {
      // this stuff happens after the click link, but
      // ZOMBIE TIMESOUT AFTER THE LINK IS CLICKED
      browser.wait( browser.window.myTest, function() {
        console.log('fancybox is now loaded');
        console.log(browser.window.myTest);
        console.log(browser.html());
        callback.pending();
      });
    });

        // now we have 1 open fancyBox
        // assert.lengthOf(this.browser.body.queryAll('.fancybox-overlay'), 1);
        // console.log(this.browser.html());
  });


  this.When(/^I press the (.*) keyboard key$/, function(key, callback) {
    console.log('555');
    console.log('key', key);
    switch(key) {
      case 'left arrow':
        //this.browser.keyPress(37);
        console.log('@STUB pressed left');
        break;
      case 'right arrow':
        console.log('@STUB pressed right');
        break;
      default:
        break;
    }
    /*
    var browser = this.browser, 
      should = this.should, 
      expect = this.expect,
      fancyNavIsPresent = this.fancyNavIsPresent;

    console.log(browser.text('title'));

    browser.wait( fancyNavIsPresent, function() {
      browser.clickLink('.fancybox-next')
        .then(function() {
          console.log('---');
          true.should.be.true;
        })
        .then(function() {
          console.log('6666666');
          callback();
        });
    });
*/
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