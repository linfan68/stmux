"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _asty = require("asty");

var _asty2 = _interopRequireDefault(_asty);

var _pegjsOtf = require("pegjs-otf");

var _pegjsOtf2 = _interopRequireDefault(_pegjsOtf);

var _pegjsUtil = require("pegjs-util");

var _pegjsUtil2 = _interopRequireDefault(_pegjsUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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

class stmuxParser {
    parseSpec() {
        /*  parse specification into Abstract Syntax Tree (AST)  */
        const asty = new _asty2.default();
        const parser = _pegjsOtf2.default.generateFromFile(_path2.default.join(__dirname, "..", "src", "stmux-2-parser.pegjs"), {
            optimize: "size",
            trace: false
        });
        let result = _pegjsUtil2.default.parse(parser, this.spec, {
            startRule: "split",
            makeAST: (line, column, offset, args) => {
                return asty.create.apply(asty, args).pos(line, column, offset);
            }
        });
        if (result.error !== null) this.fatal("parsing failure:\n" + _pegjsUtil2.default.errorMessage(result.error, true).replace(/^/mg, `${this.my.name}: ERROR: `) + "\n");
        this.ast = result.ast;
    }
}
exports.default = stmuxParser;
