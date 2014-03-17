var moment = require('moment');

var World = function World(callback) {

  this.should = require('chai').should() //actually call the the function
  this.expect = require('chai').expect;
  
  this.moment = moment;

  /*
  we can use this.should within our step definitions:

  foo.should.be.a('string');
  foo.should.equal('bar');
  foo.should.have.length(3);

  - http://chaijs.com/guide/styles/
  */
  
  // console.log(moment("Jun 18, 1992").format("YYYY"));

  callback(); // tell Cucumber we're finished and to use 'this' as the world instance
};

exports.World = World;
