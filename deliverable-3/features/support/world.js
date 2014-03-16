var Zombie = require('zombie');

var World = function World(callback) {
  
  this.should = require('chai').should();
  this.expect = require('chai').expect;
  this.chaiJQ = require('chai-jquery');

  // this.browser will be available in step definitions
  this.browser = new Zombie;
  this.browser.debug = true;

  this.config = {
    url: 'http://amoscato.com/public/deliverable-3/',
    typeofFancyBox: 'function'
  }

  this.fancyBoxIsLoaded = function() {
    return typeof this.browser.window.$.fancybox === this.config.typeofFancyBox;
  }

  this.fancyBoxIsOpen = function() {
    return this.browser.window.$('.fancybox-overlay').length != 0;
  }

  this.fancyNavIsPresent = function() {
    return this.browser.window.$('.fancybox-next').length != 0;
  }

  // this.galleryIsPresent = function() {
  //   return this.browser.query('#gallery');
  // }

  
  callback(); // tell Cucumber we're finished and to use 'this' as the world instance
};

exports.World = World;
