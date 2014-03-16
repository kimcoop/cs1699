var zombie = require('zombie');

var World = function World(callback) {
  
  // this.browser will be available in step definitions
  this.browser = new zombie;
  this.browser.debug = true;
  
  callback(); // tell Cucumber we're finished and to use 'this' as the world instance
};

exports.World = World;
