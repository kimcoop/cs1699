'use strict';

module.exports = function() {
  this.World = require("../support/world.js").World; // overwrite default World constructor

  this.Given(/^a valid reference to Moment\.js$/, function (callback) {

    var should = this.should,
      moment = this.moment;

    // ensure it's present
    moment.should.be.a('function');

    callback();
  });

  this.Given(/^today's date$/, function (callback) {
    this.setOriginalDate(new Date());
    callback();
  });

  this.When(/^I add 24 hours to the date$/, function (callback) {
    var date = this.getOriginalDate(),
      momentDate = this.moment(date);
    // do not alter the original, just store anew
    this.setMomentDate(momentDate.add('hours', 24));
    callback();
  });

  this.Then(/^I should see the original date plus one day$/, function (callback) {

    var should = this.should,
      date = this.getOriginalDate();

    // use vanilla js to increment js Date object by 1 day
    date.setDate(date.getDate() + 1);

    var momentifiedDate = this.moment(date),
      datesAreEqual = momentifiedDate.isSame(this.getMomentDate());
    
    datesAreEqual.should.be.true;

    callback();
  });

  this.When(/^I subtract (\d+) hours from the date$/, function (arg1, callback) {
    callback.pending();
  });

  this.Then(/^I should see the original date minus one day$/, function (callback) {
    callback.pending();
  });

  this.When(/^I add (\d+) days to the date$/, function (arg1, callback) {
    callback.pending();
  });

  this.Then(/^I should see the date (\d+) week ago$/, function (arg1, callback) {
    callback.pending();
  });

  this.When(/^I subtract (\d+) days from the date$/, function (arg1, callback) {
    callback.pending();
  });

};