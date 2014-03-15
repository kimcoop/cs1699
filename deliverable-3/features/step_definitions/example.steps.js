'use strict';

module.exports = function() {
  this.World = require("../support/world.js").World; // overwrite default World constructor

  /*

    this.Given(/^I am on the Cucumber.js Github repository$/, function (callback) {
      // Express the regexp above with the code you wish you had.
      // `this` is set to a new this.World instance.
      // i.e. you may use this.browser to execute the step:

      this.visit('http://github.com/cucumber/cucumber-js', callback);

      // The callback is passed to visit() so that when the job's finished, the next step can
      // be executed by Cucumber.
    });

  */

  this.Given(/^I have an empty grocery list$/, function (callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.When(/^I add an item to the list$/, function (callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^The grocery list contains a single item$/, function (callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^I can access that item from the grocery list$/, function (callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });
  
};