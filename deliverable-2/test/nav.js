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

/*
*
*= NEXT
*
*/

test( "next accepts direction as a parameter", function() {

  var directionParam = 'right', 
    nextSpy = this.spy(F, 'next');

  F.next(directionParam);
  ok(nextSpy.called, "F.next was called");
  ok(nextSpy.calledWith(directionParam), 'F.next called with directionParam');

  expect(2);
});

test( "next sends direction to jumpto function", function() {

  var directionParam = 'right',
    jumptoSpy = this.spy(F, 'jumpto'),
    current = {
      index: 1,
      direction: { next: 'left', prev: 'right' },
      loop: true,
      group: [
        { href: "img/cat.jpeg", isDom: true, title: "", type: "image" },
        { href: "img/cat-2.jpeg", isDom: true, title: "", type: "image" },
        { href: "img/cat-3.jpeg", isDom: true, title: "", type: "image" }
      ]
    };
  $.extend(F, { current: current });

  F.next(directionParam);
  ok(jumptoSpy.called, "F.jumpto was called");
  equal(jumptoSpy.getCall(0).args[1], directionParam, "F.jumpto was called with direction parameter");

  expect(2);
  delete F.current;

});

test( "next uses current.direction.next as direction if a non-string argument is passed in", function() {
  var nonStringParam = 44444,
    nextSpy = this.spy(F, 'next'),
    jumptoSpy = this.spy(F, 'jumpto'),
    current = {
      index: 1,
      direction: { next: 'left', prev: 'right' },
      loop: true,
      group: [
        { href: "img/cat.jpeg", isDom: true, title: "", type: "image" },
        { href: "img/cat-2.jpeg", isDom: true, title: "", type: "image" },
        { href: "img/cat-3.jpeg", isDom: true, title: "", type: "image" }
      ]
    };
  $.extend(F, { current: current });

  F.next(nonStringParam);
  ok(nextSpy.called, "F.next was called");
  ok(nextSpy.calledWith(nonStringParam), 'F.next called with nonStringParam');
  ok(jumptoSpy.getCall(0).args[1] !== nonStringParam, "F.jumpto was not called with direction parameter");
  equal(jumptoSpy.getCall(0).args[1], current.direction.next, "F.jumpto was called with current.direct.next as parameter");

  expect(4);
  delete F.current;
});

test( "next uses current.direction.next as direction if no argument is passed in as direction", function() {
    var nextSpy = this.spy(F, 'next'),
    jumptoSpy = this.spy(F, 'jumpto'),
    current = {
      index: 1,
      direction: { next: 'left', prev: 'right' },
      loop: true,
      group: [
        { href: "img/cat.jpeg", isDom: true, title: "", type: "image" },
        { href: "img/cat-2.jpeg", isDom: true, title: "", type: "image" },
        { href: "img/cat-3.jpeg", isDom: true, title: "", type: "image" }
      ]
    };
  $.extend(F, { current: current });

  F.next(); // no param
  ok(nextSpy.called, "F.next was called");
  equal(nextSpy.getCall(0).args.length, 0, 'F.next called with no arguments');
  equal(jumptoSpy.getCall(0).args[1], current.direction.next, "F.jumpto was called with current.direct.next as parameter");

  expect(3);
  delete F.current;
});

/*
*
*= PREV
*
*/

test( "prev accepts direction as a parameter", function() {

  var directionParam = 'left', 
    prevSpy = this.spy(F, 'prev');

  F.prev(directionParam);
  ok(prevSpy.called, "F.prev was called");
  ok(prevSpy.calledWith(directionParam), 'F.prev called with directionParam');

  expect(2);
});

test( "prev sends direction to jumpto function", function() {

  var directionParam = 'left',
    jumptoSpy = this.spy(F, 'jumpto'),
    current = {
      index: 1,
      direction: { next: 'left', prev: 'right' },
      loop: true,
      group: [
        { href: "img/cat.jpeg", isDom: true, title: "", type: "image" },
        { href: "img/cat-2.jpeg", isDom: true, title: "", type: "image" },
        { href: "img/cat-3.jpeg", isDom: true, title: "", type: "image" }
      ]
    };
  $.extend(F, { current: current });

  F.prev(directionParam);
  ok(jumptoSpy.called, "F.jumpto was called");
  equal(jumptoSpy.getCall(0).args[1], directionParam, "F.jumpto was called with direction parameter");

  expect(2);
  delete F.current;

});

test( "prev uses current.direction.prev as direction if a non-string argument is passed in", function() {
  var nonStringParam = 44444,
    prevSpy = this.spy(F, 'prev'),
    jumptoSpy = this.spy(F, 'jumpto'),
    current = {
      index: 1,
      direction: { next: 'left', prev: 'right' },
      loop: true,
      group: [
        { href: "img/cat.jpeg", isDom: true, title: "", type: "image" },
        { href: "img/cat-2.jpeg", isDom: true, title: "", type: "image" },
        { href: "img/cat-3.jpeg", isDom: true, title: "", type: "image" }
      ]
    };
  $.extend(F, { current: current });

  F.prev(nonStringParam);
  ok(prevSpy.called, "F.prev was called");
  ok(prevSpy.calledWith(nonStringParam), 'F.prev called with nonStringParam');
  ok(jumptoSpy.getCall(0).args[1] !== nonStringParam, "F.jumpto was not called with direction parameter");
  equal(jumptoSpy.getCall(0).args[1], current.direction.prev, "F.jumpto was called with current.direct.prev as parameter");

  expect(4);
  delete F.current;
});

test( "prev uses current.direction.prev as direction if no argument is passed in as direction", function() {
    var prevSpy = this.spy(F, 'prev'),
    jumptoSpy = this.spy(F, 'jumpto'),
    current = {
      index: 1,
      direction: { next: 'left', prev: 'right' },
      loop: true,
      group: [
        { href: "img/cat.jpeg", isDom: true, title: "", type: "image" },
        { href: "img/cat-2.jpeg", isDom: true, title: "", type: "image" },
        { href: "img/cat-3.jpeg", isDom: true, title: "", type: "image" }
      ]
    };
  $.extend(F, { current: current });

  F.prev(); // no param
  ok(prevSpy.called, "F.prev was called");
  equal(prevSpy.getCall(0).args.length, 0, 'F.prev called with no arguments');
  equal(jumptoSpy.getCall(0).args[1], current.direction.prev, "F.jumpto was called with current.direct.prev as parameter");

  expect(3);
  delete F.current;
});
