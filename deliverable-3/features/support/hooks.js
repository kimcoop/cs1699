var myHooks = function () {
  
  this.Before(function (callback) {
      callback();
  });

  this.After(function (callback) {

    // clear global variables
    this.dates = [];
    this.format = "";
    this.compare = {};
    
    callback();
  });
};

module.exports = myHooks;
