"use strict";

var _http = _interopRequireDefault(require("http"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var server = _http["default"].createServer(function (req, res) {
  if (req.method === 'GET') {
    res.writeHead(200, {
      "Content-Type": "text/plain"
    });
    res.end('This is me!');
  } else {
    res.writeHead(404, {
      "Content-Type": "text/plain"
    });
    res.end('404 Not-Found');
  }
});
server.listen(3000, function () {
  console.log("http://localhost:3000");
});