module( "trigger" );

// when passed an object that does not exist, trigger()
// should return undefined
test( "null object", function() {
  strictEqual(typeof fbox.trigger("foo", null), "undefined", "returns undefined");
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
  strictEqual(fbox.trigger("foo", mock), false, "returns false");
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
  fbox.trigger("foo1", mock);

  setTimeout(function() {
    strictEqual(test, true, "returns true");
    start();
  }, 1000);
});

// @todo test obj.helpers?


module( "isImage" );

// when passed a data URI with image MIME type, isImage()
// should return true
test( "data URI with image MIME type", function() {
  ok( fbox.isImage("data:image/png;base64,iVBORw0KGgoAAAANS"), "returns true" );
});

// when passed a path to a supported image file type,
// isImage() should return true
test( "supported image file type", function() {
  var types = ["jpg", "jpeg", "gif", "png", "bmp", "webp", "svg"];
  for (i in types) {
    ok( fbox.isImage("path/to/image." + types[i]), types[i] + " returns true" );
  }
});

// when passed a path to a non-supported image file type,
// isImage() should return false
test( "non-supported image file type", function() {
  ok( !fbox.isImage("path/to/image.txt"), "returns false" );
});


module( "isSWF" );

// when passed a path to a ShockWave Flash file,
// isSWF() should return true
test( "ShockWave Flash file", function() {
  ok( fbox.isSWF("path/to/movie.swf"), "returns true" );
});

// when passed a path to a non-ShockWave Flash file,
// isSWF() should return false
test( "non-swf file", function() {
  ok( !fbox.isSWF("path/to/another.swff"), "returns false" );
});
