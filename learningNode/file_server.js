var http = require('http')
var fs = require('fs')
var path = require('path')

var fsHtmlPath = path.join(path.resolve(), 'fs.html')
console.log('=====', fsHtmlPath)
var server = http.createServer(function (req, res) {
    if (req.url == '/') {
        fs.access(fsHtmlPath, fs.constants.F_OK, function () {
            console.log('no access!')
        })
        res.writeHead(200)
        fs.createReadStream('./fs.html').pipe(res)
    }
})
server.listen(5678)
console.log('Server is running at http://127.0.0.1:5678')
