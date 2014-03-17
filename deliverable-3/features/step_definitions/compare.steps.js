'use strict';

module.exports = function() {
  this.World = require("../support/world.js").World; // overwrite default World constructor
  
  this.Given(/^a valid reference to Moment.js$/, function(callback) {
    try {
      require.resolve("moment");
      callback();
    } catch(e) {
      callback.fail(new Error("Moment.js not found"));
    }
  });

  this.Given(/^(?:(yesterday|today|tomorrow)'s date)$/, function(date, callback) {
    console.log(date);
    switch(date) {
      case 'yesterday':
        this.setDate(this.moment().subtract('days', 1));
        break;
      case 'today':
        this.setDate(this.moment());
        break;
      case 'tomorrow':
        this.setDate(this.moment().add('days', 1));
        break;
    }
    callback();
  });

};