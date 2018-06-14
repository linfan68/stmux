#!/usr/bin/env node
"use strict";

var _es = require("aggregation/es6");

var _es2 = _interopRequireDefault(_es);

var _stmux0Info = require("./stmux-0-info");

var _stmux0Info2 = _interopRequireDefault(_stmux0Info);

var _stmux1Options = require("./stmux-1-options");

var _stmux1Options2 = _interopRequireDefault(_stmux1Options);

var _stmux2Parser = require("./stmux-2-parser");

var _stmux2Parser2 = _interopRequireDefault(_stmux2Parser);

var _stmux3Screen = require("./stmux-3-screen");

var _stmux3Screen2 = _interopRequireDefault(_stmux3Screen);

var _stmux4Title = require("./stmux-4-title");

var _stmux4Title2 = _interopRequireDefault(_stmux4Title);

var _stmux5Terminal = require("./stmux-5-terminal");

var _stmux5Terminal2 = _interopRequireDefault(_stmux5Terminal);

var _stmux6Border = require("./stmux-6-border");

var _stmux6Border2 = _interopRequireDefault(_stmux6Border);

var _stmux7Help = require("./stmux-7-help");

var _stmux7Help2 = _interopRequireDefault(_stmux7Help);

var _stmux8Errors = require("./stmux-8-errors");

var _stmux8Errors2 = _interopRequireDefault(_stmux8Errors);

var _stmux9Keys = require("./stmux-9-keys");

var _stmux9Keys2 = _interopRequireDefault(_stmux9Keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class STMUX extends (0, _es2.default)(_stmux0Info2.default, _stmux1Options2.default, _stmux2Parser2.default, _stmux3Screen2.default, _stmux4Title2.default, _stmux5Terminal2.default, _stmux6Border2.default, _stmux7Help2.default, _stmux8Errors2.default, _stmux9Keys2.default) {
    main() {
        this.parseOptions();
        this.parseSpec();
        this.establishScreen();
        this.provisionInitially();
        this.establishHelp();
        this.handleErrors();
        this.handleKeys();
        this.renderScreen();
    }
    fatal(msg) {
        process.stderr.write(`${this.my.name}: ERROR: ${msg}\n`);
        process.exit(1);
    }
    terminate() {
        this.screen.destroy();
        process.exit(0);
    }
}
/*!
**  stmux -- Simple Terminal Multiplexing for Node Environments
**  Copyright (c) 2017-2018 Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

let stmux = new STMUX();
stmux.main();
