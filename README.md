rid
=======

[![Build Status](https://secure.travis-ci.org/fengmk2/rid.png)](http://travis-ci.org/fengmk2/rid) [![Coverage Status](https://coveralls.io/repos/fengmk2/rid/badge.png)](https://coveralls.io/r/fengmk2/rid) [![Dependency Status](https://gemnasium.com/fengmk2/rid.png)](https://gemnasium.com/fengmk2/rid)

[![NPM](https://nodei.co/npm/rid.png?downloads=true&stars=true)](https://nodei.co/npm/rid/)

![logo](https://raw.github.com/fengmk2/rid/master/logo.png)

Request Unique ID, base on current server `ip`, `process.pid` and auto increase id, like `$ip,$pid,$id`

So your client just tell you the `Request ID`, then you `grep` the ID,
you can find out what's happen on this request.

## Install

```bash
$ npm install rid
```

## Usage

```js
var rid = require('rid');

console.log(rid()); // '10.0.0.1,68732,0'
console.log(rid()); // '10.0.0.1,68732,1'

// another process
var rid = require('rid');

console.log(rid()); // '10.0.0.1,68733,0'
console.log(rid()); // '10.0.0.1,68733,1'

// another node server
var rid = require('rid');

console.log(rid()); // '10.0.0.2,5017,0'
console.log(rid()); // '10.0.0.2,5017,1'
```

## License

(The MIT License)

Copyright (c) 2014 fengmk2 &lt;fengmk2@gmail.com&gt; and other contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
