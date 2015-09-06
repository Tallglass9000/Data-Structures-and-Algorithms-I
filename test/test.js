var expect = require('chai').expect;
var assert = require('assert');
var app = require('../pop.js');
var appPush = require('../push.js');
var appShift = require('../shift.js');
var appUnshift = require('../unshift.js');


describe('Test Suite 1', function () {
  it('should equal [1, 2]', function (done) {
    assert.ok(true, "this should pass");
    assert(app._test.popIt, "popIt could not be found");

    var popIt = app._test.popIt;
    expect(popIt([1,2,3])).to.eql([1,2]);

    done();
  });

  it('should equal [1, 2, 3, 4]', function (done) {
    assert.ok(true, "this should pass");
    assert(appPush._test.pushIt, "pushIt could not be found");

    var pushIt = appPush._test.pushIt;
    expect(pushIt([1, 2, 3], 4)).to.eql([1, 2, 3, 4]);

    done();
  });

  it('should equal [2, 3]', function (done) {
    assert.ok(true, "this should pass");
    assert(appShift._test.shiftIt, "shiftIt could not be found");

    var shiftIt = appShift._test.shiftIt;
    expect(shiftIt([1, 2, 3])).to.eql([2, 3]);

    done();
  });

  it('should equal [1, 2, 3]', function (done) {
    assert.ok(true, "this should pass");
    assert(appUnshift._test.unshiftIt, "unshiftIt could not be found");

    var unshiftIt = appUnshift._test.unshiftIt;
    expect(unshiftIt([2, 3], 1)).to.eql([1, 2, 3]);

    done();
  });
});





