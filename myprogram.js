var http = require('http');
var url = require('url');
var dt = require('./myprogram.js');
var fs = require('fs');

var uc = require('upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  /*Use our upper-case module to upper case a string:*/
  res.write(uc.upperCase("Hello World!"));
  res.end();
}).listen(8080);



exports.myDateTime = function () {
  return Date();
};


/*
http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);




http.createServer(function (req, res) {
  fs.appendFile("mynewfile1.txt", "Hello Content!", function(err) {
    if (err) throw err;
    console.log("Saved")
  })
  fs.unlink("mynewfile1.txt", function (err) {
    if (err) throw err;
    console.log("File deleted");
  });
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month
  res.write("The date and time are currently: " + dt.myDateTime());
  return res.end(txt);
}).listen(8080);

*/
