'use strict';

module.exports = function() {
  this.World = require("../support/world.js").World; // overwrite default World constructor
  
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