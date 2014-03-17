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


  this.When(/^I compare the dates$/, function(callback) {
    this.compare.before = this.getDate(0).isBefore(this.getDate(1));
    this.compare.same = this.getDate(0).isSame(this.getDate(1));
    this.compare.after = this.getDate(0).isAfter(this.getDate(1));
    callback();
  });


  this.Then(/^it should indicate that the first date is (before|the same as|after) the second date$/, function(compare, callback) {
    switch(compare) {
      case 'before':
        this.compare.before.should.be.true;
        break;
      case 'the same as':
        this.compare.same.should.be.true;
        break;
      case 'after':
        this.compare.after.should.be.true;
        break;
    }
    callback();
  });

};