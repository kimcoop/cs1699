var myHooks = function () {
  
  this.Before(function (callback) {
      callback();
  });

  this.After(function (callback) {

    // clear global variables
    this.dates = [];
    this.compare = {};
    
    callback();
  });
};

module.exports = myHooks;
