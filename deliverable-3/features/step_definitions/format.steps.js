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


  this.When(/^I pass in the format string "(.*)"$/, function(format, callback) {
    this.format = this.getDate().format(format);
    callback();
  });


  this.Then(/^I should see a string containing (.*)$/, function(list, callback) {
    var result = "";
    var date = new Date();

    var contents = list.split(', ');
    if (contents.length == 1) {
      contents = list.split(' and ');
    }

    for (var i in contents) {
      contents[i] = contents[i].replace('and', '').trim();
      switch(contents[i]) {
        case "today's year":
          result += date.getFullYear();
          break;
        case "today's 2-digit month":
          result += this.padDigits(date.getMonth() + 1, 2);
          break;
        case "today's month":
          result += date.getMonth() + 1;
          break;
        case "today's 2-digit day":
          result += this.padDigits(date.getDate(), 2);
          break;
        case "today's day":
          result += date.getDate();
          break;
        case "today's 24-hour time":
          result += date.getHours() + ':' + this.padDigits(date.getMinutes(), 2);
          break;
      }
      result += ' ';
    }

    this.format.should.equal(result.trim());

    callback();
  });

};