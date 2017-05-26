/*var http = require('http')
    ,*/
     let ejs = require('ejs');
/* create http server
http.createServer(function (req, res) {
 res.writeHead(200, {
        'content-type': 'text/html'
    });
    // data to render
    var names = ['Name 1', 'Name 2', 'Name 3', 'Name 4', 'Name 5'];
    var title = 'EJS template with Node.JS';
    // rendering the ejs file
    ejs.renderFile(__dirname + '\\simple.ejs',
        { title: title, names: names },
        function (err, result) {
            // render on success
            if (!err) {
                res.end(result);
                console.log(result);
            }
            // render or error
            else {
                res.end('An error occurred');
                console.log(err);
            }
        });
}).listen(8124);
console.log('Server running on 8124/'); */

var names = ['Name 1', 'Name 2', 'Name 3', 'Name 4', 'Name 5'];
    var title = 'EJS template with Node.JS';
ejs.renderFile(__dirname + '\\simple.ejs',
        { title: title, names: names }, function (err, result) {
            // render on success
            if (!err) {
                console.log(result);
            }
            // render or error
            else {
                console.log(err);
            }});
