module( "navigation", {
  setup: function() {
    $('body')
      .append('<a class="fancy" rel="gallery" href="img/cat.jpeg"><img src="img/cat.jpeg"></a>')
      .append('<a class="fancy" rel="gallery" href="img/cat-2.jpeg"><img src="img/cat-2.jpeg"></a>')
      .append('<a class="fancy" rel="gallery" href="img/cat-3.jpeg"><img src="img/cat-3.jpeg"></a>');
    var $fancy = $('.fancy');
    $fancy.fancybox();
    $fancy.on('click', function() {
      setTimeout( function() {
        $('.fancybox-wrap').hide();
        $('.fancybox-overlay').hide();
      }, 100);
    }).first().trigger('click');

  },
  teardown: function() {
    $('.fancy').remove();
  }
});

test( "next uses parameter to set direction if it is passed in as a string", function() {

  var directionParam = 'right', 
    nextSpy = this.spy(F, 'next');
    // nextSpy = Dexter.spy(F, 'next', function(arg) {
    //   equal(arg, directionParam, 'arg === ' + directionParam);
    // });

  F.next(directionParam);
  ok(nextSpy.calledWith(directionParam), 'F.next called with directionParam');

  nextSpy.restore();
  expect(1);
});

// @TODO - why does this fail?
test( "next passes direction to jumpTo", function() {
  // if called correctly, F.next should call F.jumpto
  // with the argument passed into F.next as its second param

  var direction = 'right',
    jumptoSpy = Dexter.spy(F, 'jumpto', function(args) {
      equal(args[1], directionParam, 'args[1] === ' + directionParam);
    });

  F.next();

  equal(jumptoSpy.called, 1, 'F.jumpto called once');
  jumptoSpy.restore();
  expect(2);
});

/*&
next: function ( direction ) {
      var current = F.current;

      if (current) {
        if (!isString(direction)) {
          direction = current.direction.next;
        }

        F.jumpto(current.index + 1, direction, 'next');
      }
    },*/

test( "next defaults to current.direction.next if no argument is passed in as direction", function() {
  var fake = Dexter.fake(window, 'F', function() {
    return { current: { index: 0, direction: { next: 'fake_left', prev: 'fake_right' } } };
  });




});

test( "next defaults to current.direction.next if a non-string argument is passed in", function() {
  var fake = Dexter.fake(F, 'current', function() {
    return 'galleryItem';
  }), returnedValue;
  
  returnedValue = next;

});

test( "next jumps current gallery item", function() {
  var fake = Dexter.fake(F, 'current', function() {
    return 'galleryItem';
  }), returnedValue;
  
  returnedValue = next;

});

// when passed a path to a non-ShockWave Flash file,
// isSWF() should return false
test( "non-swf file", function() {
  ok( !F.isSWF("path/to/another.swff"), "returns false" );
});
