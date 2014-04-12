'use strict';

 
var sharedSteps = module.exports = function() {

  this.World = require('../support/world').World;

  var should = this.should,
      expect = this.expect;

  this.Given(/^I am on the page "([^"]*)"$/, function (url, next) {
    this.client
      .url(url);
    next();
  });

  this.Given(/^I enter the value "([^"]*)" on the base image input element "([^"]*)"$/, function (value, selector, next) {
     this.client
      .setValue(selector, value);
    next();
  });

  this.Given(/^I clear the value of the input element "([^"]*)"$/, function (selector, next) {
     this.client
      .setValue(selector, "");
    next();
  });

  this.Given(/^I submit the form "([^"]*)"$/, function (selector, next) {
      this.client
        .submitForm('.form-wtm');
      next();
  });

  this.When(/^I visit the page "([^"]*)"$/, function (url, next) {
    this.client
      .url(url);
    next();
  });

  this.Then(/^I should see "([^"]*)" as the source of the element "([^"]*)"$/, function (value, selector, next) {
    var should = this.should;
    this.client
      .waitFor(selector, 500)
      .getAttribute(selector, 'src', function(error, currValue) {
        currValue.should.equal(value);
      });
    next();
  });

      
  /*
  *= ADMIN IMAGE
  */


  this.Given(/^I am on the page "([^"]*)"$/, function (url, next) {
    this.client
      .url(url);
    next();
  });

  this.Given(/^I enter the value "([^"]*)" on the admin image input element "([^"]*)"$/, function (value, selector, next) {
     this.client
      .setValue(selector, value);
    next();
  });

  this.Given(/^I submit the form "([^"]*)"$/, function (selector, next) {
      this.client
        .submitForm('.form-wtm');
      next();
  });

  this.When(/^I visit the page "([^"]*)"$/, function (url, next) {
    this.client
      .url(url);
    next();
  });

  this.Then(/^I should see "([^"]*)" as the source of the element "([^"]*)"$/, function (value, selector, next) {
    var should = this.should;
    this.client
      .waitFor(selector, 500)
      .getAttribute(selector, 'src', function(error, currValue) {
        currValue.should.equal(value);
      });
    next();
  });


/*
*= COLORS
*/




    this.Given(/^I am on the page "([^"]*)"$/, function (url, next) {
      this.client
        .url(url);
      next();
    });

    this.Given(/^I enter the value "([^"]*)" on the primary font input element "([^"]*)"$/, function (value, selector, next) {
       this.client
        .getTitle(function(error, title) {
        })
        .setValue(selector, value);
      next();
    });

    this.Given(/^I submit the form "([^"]*)"$/, function (selector, next) {
        this.client
          .submitForm('.form-wtm');
        next();
    });

    this.When(/^I visit the page "([^"]*)"$/, function (url, next) {
      this.client
        .getTitle(function(error, title) {
        })
        .url(url);
      next();
    });

    this.Then(/^I should see "([^"]*)" as the inline style of the element "([^"]*)"$/, function (style, selector, next) {
      
      var should = this.should;
      this.client
        .getTitle(function(err, title) {
         })
        .waitFor(selector, 500, function() {
        })
        .getAttribute(selector, 'style', function(error, currValue) {
          currValue.should.equal(style);
        });
      next();
    });






}