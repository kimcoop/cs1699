var Zombie = require('zombie');
Zombie.waitFor = 2000;

var World = function World(callback) {
  
  this.should = require('chai').should();
  this.expect = require('chai').expect;
  this.chaiJQ = require('chai-jquery');

  // this.browser will be available in step definitions
  this.browser = new Zombie;
  this.browser.debug = true;
  this.browser.waitFor = 2000;

  var browser = this.browser;

  this.config = {
    url: 'http://amoscato.com/public/deliverable-3/',
    typeofFancyBox: 'function'
  }

  this.fancyBoxIsLoaded = function() {
    return typeof browser.window.$.fancybox === 'function';
  }

  this.fancyBoxIsOpen = function() {
    return browser.window.$('.fancybox-next').length !== 0;
  }

  this.fancyNavIsPresent = function() {
    return browser.window.$('.fancybox-next').length != 0;
  }

  // this.galleryIsPresent = function() {
  //   return this.browser.query('#gallery');
  // }

  
  callback(); // tell Cucumber we're finished and to use 'this' as the world instance
};

exports.World = World;
