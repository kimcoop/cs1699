var zombie = require('zombie');
var assert = require('assert');

var World = function World(callback) {
  
  // this.browser will be available in step definitions
  this.browser = new zombie;
  this.browser.debug = true;
  
  callback(this); // tell Cucumber we're finished and to use 'this' as the world instance
};

exports.World = World;
