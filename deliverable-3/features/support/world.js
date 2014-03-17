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

  my.compare = {};
  my.dates = {};
  
  my.setDate = function(key, date) {
    my.dates[key] = date;
  };

  my.getDate = function(key) {
    return my.dates[key];
  }

  callback(); // tell Cucumber we're finished and to use 'this' as the world instance
};

exports.World = World;
