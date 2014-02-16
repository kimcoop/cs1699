module( "trigger" );

// when passed an object that does not exist, trigger()
// should return undefined
test( "null object", function() {
  strictEqual(typeof F.trigger("foo", null), "undefined", "returns undefined");
});

// when passed an event that cooresponds to the passed
// object's function that returns false, trigger()
// should immediately return false
test( "event cooresponding to object function returns false", function() {
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

// @todo test obj.helpers?
/*
(function() {
  
  //console.debug(mocked);

  console.debug(F.trigger.call(mocked, {
    event: "foo",
    o: mocked.mock,
    F: mocked.F
  }));
})();

test( "helper functions are called if they exist", function() {
 
  var mocked = {
    mock: {
      helpers: {
        foo: 'bar'
      }
    },
    F: {
      'hi': true
    }
  };

  console.debug(F.trigger.call(mocked, "foo", mocked.mock));
  //console.debug(F.trigger("foo", mock));

  ok( F.trigger("foo", mock), "returns true" );
});
*/


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
