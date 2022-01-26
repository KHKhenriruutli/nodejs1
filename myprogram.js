var http = require('http');
var url = require('url');
var dt = require('./myprogram.js');
var fs = require('fs');

exports.myDateTime = function () {
  return Date();
};


http.createServer(function (req, res) {
  fs.readFile('/demofile1.html', function (err, data) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month
  res.write("The date and time are currently: " + dt.myDateTime());
  return res.end(txt);
});
}).listen(8080);

