const { response } = require('express');
var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/get.html', function (req, res) {
    console.log(__dirname, 'khushi');
res.sendFile( __dirname + "/" + "get.html" );
})
app.get('/process_get', function (req, res) {
// Prepare output in JSON format
let response = {
first_name:req.query.first_name,
last_name:req.query.last_name
};
console.log(response);
// console.log(res.end(JSON.stringify(response)))
res.end(JSON.stringify(response));
})
var server = app.listen(8081, function () {
var host = server.address().address
var port = server.address().port
console.log("Example app listening at http://%s:%s", host, port)
})