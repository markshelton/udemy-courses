"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// App Setup

// Server Setup
var port = process.env.PORT || 3090;
app.listen(port, function () {
  return console.log("Server listening on: " + port);
});
//# sourceMappingURL=index.js.map