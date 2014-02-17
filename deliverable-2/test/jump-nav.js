module( "jump_navigation", {
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
    F.close();
  }
});

/*
*
*= JUMPTO
*
*/

test( "jumpto accepts index, direction, and router as parameters", function() {

  var directionParam = 'right',
    indexParam = 1,
    routerParam = 'jumpto',
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

  F.jumpto(indexParam, directionParam, routerParam);
  ok(jumptoSpy.called, "F.jumpto was called");
  ok(jumptoSpy.calledWithExactly(indexParam, directionParam, routerParam), "F.jumpto called with proper parameters");

  expect(2);
  delete F.current;

});

test( "jumpto returns if current is null", function() {
  var directionParam = 'right',
    jumptoSpy = this.spy(F, 'jumpto'),
    cancelSpy = this.spy(F, 'cancel'),
    startSpy = this.spy(F, '_start'),
    bigIndex = 10000;

  $.extend(F, { current: null });

  F.jumpto(directionParam);

  ok(jumptoSpy.firstCall, "F.jumpto was called first");
  ok(jumptoSpy.calledOnce, "F.jumpto was called once");
  equal(jumptoSpy.returnValues[0], undefined, "F.jumpto returned no values");
  ok(jumptoSpy.lastCall, "F.jumpto was called last");
  equal(cancelSpy.callCount, 0, "F.cancel was not called");
  equal(startSpy.callCount, 0, "F._start() was not called");

  expect(6);
  delete F.current;
});

test( "jumpto does not call F.cancel if current is null", function() {
  var directionParam = 'right',
    jumptoSpy = this.spy(F, 'jumpto'),
    cancelSpy = this.spy(F, 'cancel'),
    bigIndex = 10000;

  $.extend(F, { current: null });

  F.jumpto(directionParam);

  ok(jumptoSpy.firstCall, "F.jumpto was called first");
  equal(cancelSpy.callCount, 0, "F.cancel was not called");
  ok(jumptoSpy.lastCall, "F.jumpto was called last");

  expect(3);
  delete F.current;
});

test( "jumpto does not call F._start if current is null", function() {
  var directionParam = 'right',
    jumptoSpy = this.spy(F, 'jumpto'),
    startSpy = this.spy(F, '_start'),
    bigIndex = 10000;

  $.extend(F, { current: null });

  F.jumpto(directionParam);

  ok(jumptoSpy.firstCall, "F.jumpto was called first");
  equal(startSpy.callCount, 0, "F._start was not called");
  ok(jumptoSpy.lastCall, "F.jumpto was called last");

  expect(3);
  delete F.current;
});

test("if current.group at position index is not undefined, F.cancel() and F._start() are called", function() {
  var directionParam = 'right',
    cancelSpy = this.spy(F, 'cancel'),
    startSpy = this.spy(F, '_start'),
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

  F.jumpto(directionParam);
  ok(cancelSpy.called, "F.cancel was called");
  ok(startSpy.called, "F._start() was called");

  expect(2);
  delete F.current;
});

// ensure order of functons is maintained
test("if current.group at position index is not undefined, F.cancel() is called, and then F._start() is called", function() {
  var directionParam = 'right',
    cancelSpy = this.spy(F, 'cancel'),
    startSpy = this.spy(F, '_start'),
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

  F.jumpto(directionParam);
  ok(cancelSpy.called, "F.cancel was called");
  ok(startSpy.called, "F._start was called");
  ok(cancelSpy.calledBefore(startSpy), "F.cancel was called before F.start");

  expect(3);
  delete F.current;
});

test("if current.group at position index is undefined, F.cancel() and F._start() are not called", function() {

  var directionParam = 'right',
    cancelSpy = this.spy(F, 'cancel'),
    startSpy = this.spy(F, '_start'),
    bigIndex = 10000,
    current = {
      index: bigIndex, // pass in an impossible index
      direction: { next: 'left', prev: 'right' },
      loop: false, // ensure index stays as the param we passed in
      group: [
        { href: "img/cat.jpeg", isDom: true, title: "", type: "image" },
        { href: "img/cat-2.jpeg", isDom: true, title: "", type: "image" },
        { href: "img/cat-3.jpeg", isDom: true, title: "", type: "image" }
      ]
    },
    stubIndexCalc = this.stub(window, 'getScalar', function(arg) {
      // ensure we maintain unaltered bigIndex
      return arg;
    });
  $.extend(F, { current: current });

  F.jumpto(directionParam);

  ok(typeof(current.group[ bigIndex ]) === 'undefined', "current.group at position index is undefined");
  equal(cancelSpy.callCount, 0, "F.cancel was not called");
  equal(startSpy.callCount, 0, "F._start() was not called");

  expect(3);
  delete F.current;
});