'use strict';

module.exports = function() {
  this.World = require("../support/world.js").World; // overwrite default World constructor

  /*
  *= ADD
  */


  this.When(/^I add 24 hours to the date$/, function (callback) {
    var date = this.getOriginalDate(),
      momentDate = this.moment(date);

    // do not alter the original, just store anew
    this.setMomentDate(momentDate.add('hours', 24));

    // and update original
    // use vanilla js to increment js Date object by 1 day
    this.setOriginalDate( date.setDate(date.getDate() + 1) );

    callback();
  });

  this.Then(/^I should see the original date plus one day$/, function (callback) {

    var should = this.should,
      date = this.getOriginalDate();

    var momentifiedDate = this.moment(date),
      datesAreEqual = momentifiedDate.isSame(this.getMomentDate());
    
    datesAreEqual.should.be.true;

    callback();
  });


  /*
  *= SUBTRACT
  */

  this.When(/^I subtract 24 hours from the date$/, function (callback) {
    var date = this.getOriginalDate(),
      momentDate = this.moment(date);
    this.setMomentDate(momentDate.subtract('hours', 24));

    this.setOriginalDate( date.setDate(date.getDate() - 1) );

    callback();
  });

  this.Then(/^I should see the original date minus one day$/, function (callback) {
    
    var should = this.should,
      date = this.getOriginalDate();

    var momentifiedDate = this.moment(date),
      datesAreEqual = momentifiedDate.isSame(this.getMomentDate());
    
    datesAreEqual.should.be.true;

    callback();

  });


  /*
  *= ADD DAYS
  */


  this.When(/^I add (\d+) days to the date$/, function (numDays, callback) {
    var numDays = Number(numDays),
      date = this.getOriginalDate(),
      momentDate = this.moment(date);

    this.setOriginalDate( date.setDate(date.getDate() + numDays) );
    this.setMomentDate(momentDate.add('days', numDays));

    callback();
  });

  this.Then(/^I should see the date (\d+) days from now$/, function (numDays, callback) {
    var numDays = Number(numDays),
      should = this.should,
      date = this.getOriginalDate();

    var momentifiedDate = this.moment(date),
      datesAreEqual = momentifiedDate.isSame(this.getMomentDate());

    datesAreEqual.should.be.true;

    callback();
  });

  /*
  *= SUBTRACT DAYS
  */

  this.When(/^I subtract (\d+) days from the date$/, function (numDays, callback) {
    var numDays = Number(numDays),
      date = this.getOriginalDate(),
      momentDate = this.moment(date);
    this.setOriginalDate( date.setDate(date.getDate() - numDays) );
    this.setMomentDate(momentDate.subtract('days', numDays));
    callback();
  });

  this.Then(/^I should see the date (\d+) days ago$/, function (numDays, callback) {
    var numDays = Number(numDays),
      should = this.should,
      date = this.getOriginalDate();

    var momentifiedDate = this.moment(date),
      datesAreEqual = momentifiedDate.isSame(this.getMomentDate());
    
    datesAreEqual.should.be.true;

    callback();
  });


};