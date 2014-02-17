module( "hideLoading" );

// after a call to hideLoading(), there should not exist an
// element in the DOM with an id #fancybox-loading
test( "remove loading element", function() {
  var body = document.getElementsByTagName('body')[0];
  body.innerHTML += '<div id="fancybox-loading"></div>';

  F.hideLoading();
  this.clock.tick(1000);

  strictEqual(document.getElementById('fancybox-loading'), null, 'asdf');
});


module( "showLoading" );

// before appending the loading element to the DOM and binding
// it to the appropriate events, showLoading() should make
// a call to hideLoading()
test( "call hideLoading()", function() {
  var spy = this.spy( F, 'hideLoading');
  F.showLoading();
  equal( spy.called, 1, 'hideLoading() called once');
});

// after calling showLoading(), an element with an id of
// #fancybox-loading should be appended to the DOM
test( "DOM element creation", function() {
  F.showLoading();
  var el = document.getElementById("fancybox-loading");
  ok( el, "loading element exists" );
  el.parentElement.removeChild(el);
});

// after a call to showLoading, the #fancybox-loading element
// should call F.cancel when the escape key is pressed
test( "press escape key", function() {
  F.showLoading();
  var $el = $('#fancybox-loading'),
  spyCancel = this.spy( F, 'cancel' );

  var e = $.Event('keydown.loading');
  e.which = 27;
  $el.trigger(e);
  
  equal( spyCancel.called, 1, "has called cancel()");

  F.hideLoading(); // cleanup; function already tested
});

// after a call to showLoading, the #fancybox-loading element
// should not be affected when not pressing the escape key
test( "press key other than escape", function() {
  F.showLoading();
  var $el = $('#fancybox-loading'),
  spyCancel = this.spy( F, 'cancel' );

  var e = $.Event('keydown.loading');
  e.which = 28;
  $el.trigger(e);
  
  equal( spyCancel.called, 0, "has not called cancel()");

  F.hideLoading(); // cleanup; function already tested
});


module( "getViewport" );

// assuming that F.current is not locked, getViewport()
// should return the values that describe the user's
// viewport; these values are defined by jQuery's scrollLeft(),
// scrollTop(), width() and height() methods respectively
test( "user's viewport", function() {
  var fakeScrollLeft = this.stub(W, 'scrollLeft', function() {
    return 5;
  }),
  fakeScrollTop = this.stub(W, 'scrollTop', function() {
    return 10;
  }),
  fakeWidth = this.stub(W, 'width', function() {
    return 200;
  }),
  fakeHeight = this.stub(W, 'height', function() {
    return 100;
  });

  deepEqual( F.getViewport(), {
    x: 5,
    y: 10,
    w: 200,
    h: 100
  }, "returns correct viewport");
});


module( "trigger" );

// when passed an object that does not exist, trigger()
// should return undefined
test( "null object", function() {
  strictEqual(typeof F.trigger("foo", null), "undefined", "returns undefined");
});

// when passed an event that cooresponds to the passed
// object's function that returns false, trigger()
// should immediately return false
test( "event corresponding to object function returns false", function() {
  var mock = {
    foo: function() {
      return false;
    }
  };
  strictEqual(F.trigger("foo", mock), false, "returns false");
});

// when passed an event that does not coorespond to a
// passed object's function that returns false, trigger()
// should call $(document).trigger()
test( "event is triggered on $(document)", function() {
  var test = false, mock = {}, fake = this.stub(D, 'trigger', function() {
    test = true;
  });

  F.trigger("foo1", mock);
  strictEqual(test, true, "has been set to true true");
});
/*
// asynchronous variation depends on jQuery.one()
asyncTest( "event is triggered on $(document)", function() {
  expect(1);

  // bind to "foo" event once
  $(document).one("foo1", function() {
    test = true;
  });

  var test = false, mock = {};
  F.trigger("foo1", mock);

  setTimeout(function() {
    strictEqual(test, true, "returns true");
    start();
  }, 1000);
});
*/

// when passed an event that cooresponds to a function in the
// passed obj.helpers object, the helper object's function
// should be called
test( "helper functions are called if they exist", function() {
  var test = false, mock = {
    helpers: {
      overlay: {}
    }
  }, fake = this.stub(F.helpers.overlay, 'create', function() {
    test = true;
  });

  F.trigger("create", mock);
  strictEqual( test, true, "has been set to true" );
});


module( "isImage" );

// when passed a data URI with image MIME type, isImage()
// should return true
test( "data URI with image MIME type", function() {
  ok( F.isImage("data:image/png;base64,iVBORw0KGgoAAAANS"), "returns true" );
});

// when passed a path to a supported image file type,
// isImage() should return true
test( "supported image file type", function() {
  var types = ["jpg", "jpeg", "gif", "png", "bmp", "webp", "svg"];
  for (i in types) {
    ok( F.isImage("path/to/image." + types[i]), types[i] + " returns true" );
  }
});

// when passed a path to a non-supported image file type,
// isImage() should return false
test( "non-supported image file type", function() {
  ok( !F.isImage("path/to/image.txt"), "returns false" );
});


module( "isSWF" );

// when passed a path to a ShockWave Flash file,
// isSWF() should return true
test( "ShockWave Flash file", function() {
  ok( F.isSWF("path/to/movie.swf"), "returns true" );
});

// when passed a path to a non-ShockWave Flash file,
// isSWF() should return false
test( "non-swf file", function() {
  ok( !F.isSWF("path/to/another.swff"), "returns false" );
});
