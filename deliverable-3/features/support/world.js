var zombie = require('zombie');
zombie.waitFor = 2000;

var World = function World(callback) {
  
  // this.browser will be available in step definitions
  this.browser = new zombie;
  this.browser.debug = true;
  this.browser.waitFor = 2000;

  this.myWait = function() {
    console.log('hi');
    setTimeout(function() {
      console.log('well, hello');
      return true;
    }, 1500);
  };
  
  callback(); // tell Cucumber we're finished and to use 'this' as the world instance
};

exports.World = World;
