var http = require("http");
var port = process.env['PORT'] || 3000;

// http.createServer(function(req, res) {
//     res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
//     res.end('<!DOCTYPE html><html><meta charset="utf-8"><title>It works' +
//             "</title>HELP <br /> <b>It works!</b><br /><br />This is the server's " +
//             "default server.js.");
// }).listen(port);
// console.log("Server ready to accept requests on port %d", port);


var express = require("express");
var app     = express();
var path    = require("path");

app.use('/', express.static(__dirname + '/site'));

// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname+'/site/index.html'));
//   //__dirname : It will resolve to your project folder.
// });

app.listen(3000);

console.log("Running at Port 3000");