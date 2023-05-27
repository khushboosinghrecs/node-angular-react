var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res){
    console.log(res, "responce");
    // console.log(req, 'req url');
    // console.log(url.parse(), 'url parsed');
    console.log(url, 'url hind ');

    var pathname = url.parse(req.url).pathname;

    console.log("request for ", pathname, "recieved");

    fs.readFile(pathname.substr(1), function(err, data){
        if(err){
            console.log(err);

            res.writeHead(404, {'Content-Type': 'text/html'});
        }
        else{
            res.writeHead(200, {'Content-type': 'text'});
            res.write(data.toString());
        }
        res.end();
    })
}).listen(8083);

console.log('Server running at 8082');
