var moment = require('moment');

var World = function World(callback) {
  var my = this;

  my.should = require('chai').should() //actually call the the function
  my.expect = require('chai').expect;
  
  my.moment = moment;

  /*
  we can use this.should within our step definitions:

  foo.should.be.a('string');
  foo.should.equal('bar');
  foo.should.have.length(3);

  - http://chaijs.com/guide/styles/
  */


  my.dates = [];
  my.format = "";
  my.compare = {};

  my.setDate = function(date) {
    my.dates.push(date);
  };

  my.getDate = function(index) {
    if (index && index < my.dates.length) {
      return my.dates[index];
    } else if (my.dates.length) {
      return my.dates[0];
    } else {
      return null;
    }
  }
  
  my.originalDate = '';
  my.momentDate = '';
  my.setOriginalDate = function(date) {
    my.originalDate = date;
  }
  my.getOriginalDate = function() {
    return my.originalDate;
  }
  my.setMomentDate = function(date) {
    my.MomentDate = date;
  }
  my.getMomentDate = function() {
    return my.MomentDate;
  }

  my.padDigits = function(str, digits) {
    str = str + '';
    if (digits > str.length) {
      for (var i = str.length; i < digits; i++) {
        str = '0' + str;
      }
    }
    return str;
  }

  callback(); // tell Cucumber we're finished and to use 'this' as the world instance
};

exports.World = World;
