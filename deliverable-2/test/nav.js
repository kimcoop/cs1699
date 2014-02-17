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

// next should advance current gallery item to its next right sibling
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
test( "next uses parameter to set direction if it is passed in as a string", function() {
  // var fake = Dexter.fake(window, 'F', function() {
  //   return { F: { index: 0, direction: { next: 'fake_left', prev: 'fake_right' } } };
  // });

  var directionParam = 'right';

  var nextSpy = Dexter.spy(F, 'next', function(arg) {
    equal(arg, directionParam, 'arg === ' + directionParam);
  });

  F.next(directionParam);
  equal(nextSpy.called, 1, 'F.next called once');

  nextSpy.restore();
  expect(2);
});

// test( "next passes direction to jumpTo", function() {
//   // // if called correctly, F.next should call F.jumpto
//   // // with the argument passed into F.next as its second param
//   var jumptoSpy = Dexter.spy(F, 'jumpto', function(args) {
//     console.debug(args);
//     equal(args[1], directionParam, 'args[1] === ' + directionParam);
//   });

//   F.jumpto('next');

//   equal(jumptoSpy.called, 1, 'F.jumpto called once');
//   jumptoSpy.restore();
//   expect(2);
// });

test( "next defaults to current.direction.next if no arguments are passed in", function() {
  var fake = Dexter.fake(F, 'current', function() {
    return 'galleryItem';
  }), returnedValue;
  
  returnedValue = next;

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
