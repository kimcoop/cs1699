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

  /*
  // alternative implementation
  this.Given(/^a valid reference to Moment\.js$/, function (callback) {

    var should = this.should,
      moment = this.moment;

    // ensure it's present
    moment.should.be.a('function');

    callback();
  });
  */

  this.Given(/^(?:(yesterday|today|tomorrow)'s date)$/, function(date, callback) {
    switch(date) {
      case 'yesterday':
        this.setDate(this.moment(this.today).subtract('days', 1));
        break;
      case 'today':
        this.setDate(this.moment(this.today));
        this.setOriginalDate(new Date(this.today));
        break;
      case 'tomorrow':
        this.setDate(this.moment(this.today).add('days', 1));
        break;
    }
    callback();
  });

};