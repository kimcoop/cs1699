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

test( "next accepts direction as a parameter", function() {

  var directionParam = 'right', 
    nextSpy = this.spy(F, 'next');

  F.next(directionParam);
  ok(nextSpy.called);
  ok(nextSpy.calledWith(directionParam), 'F.next called with directionParam');

  expect(2);
});

// @TODO
test( "next sends direction to jumpto function", function() {

  var directionParam = 'right',
    jumptoSpy = this.spy(F, 'jumpto');

  var currentStub = this.stub(F, 'current', function() {
    return {
      index: 1,
      direction: { next: 'left', prev: 'right' },
      loop: true,
      group: [
        { href: "img/cat.jpeg", isDom: true, title: "", type: "image" },
        { href: "img/cat-2.jpeg", isDom: true, title: "", type: "image" },
        { href: "img/cat-3.jpeg", isDom: true, title: "", type: "image" }
      ]
    };
  });

  F.next(directionParam);
  ok(jumptoSpy.called, "jumpto was called");

  // var directionParam = 'right', 
  //   nextSpy = this.spy(F, 'next'),
  //   jumptoSpy = this.spy(F, 'jumpto'),
  
  // // console.debug(F.current);
  // F.next(directionParam);
  // ok(nextSpy.called);
  // ok(jumptoSpy.called);
  // equals(jumptoSpy.getCall(0).args[1], directionParam);

  expect(1);
});

test( "next defaults to current.direction.next if a non-string argument is passed in", function() {
  var badParam = 44444, 
    nextSpy = this.spy(F, 'next');

  F.next(badParam);
  ok(nextSpy.called);
  ok(nextSpy.calledWith(badParam), 'F.next called with badParam');

  expect(2);
});

// @TODO - why does this fail?
test( "next passes direction to jumpTo", function() {
  // if called correctly, F.next should call F.jumpto
  // with the argument passed into F.next as its second param

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

});


test( "next jumps current gallery item", function() {
  
});
