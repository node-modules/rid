/**!
 * rid - test/rid.test.js
 *
 * Copyright(c) 2014
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

"use strict";

/**
 * Module dependencies.
 */

var should = require('should');
var rid = require('../');

describe('rid.test.js', function () {
  describe('rid()', function () {
    it('should return a string id', function () {
      var id = rid();
      id.should.be.a.String;
      id.should.match(/^\d+\.\d+\.\d+\.\d+,\d+,\d+$/);
      var id2 = rid();
      id2.should.be.a.String;
      id2.should.match(/^\d+\.\d+\.\d+\.\d+,\d+,\d+$/);
      id2.should.above(id);
      rid().should.above(id2);
    });
  });
});
