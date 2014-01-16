/**!
 * rid - lib/rid.js
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

var address = require('address');

var IP = address.ip();
var id = 0;

function rid() {
  return IP + ',' + process.pid + ',' + id++;
}

module.exports = rid;
