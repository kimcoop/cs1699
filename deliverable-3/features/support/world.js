var moment = require('moment');

var World = function World(callback) {
  
  console.log(moment("Jun 18, 1992").format("YYYY"));

  callback(); // tell Cucumber we're finished and to use 'this' as the world instance
};

exports.World = World;
