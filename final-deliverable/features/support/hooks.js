var myHooks = function () {
  
  this.Before(function (callback) {
      callback();
  });

  this.After(function (callback) {
    callback();
  });
};

module.exports = myHooks;
