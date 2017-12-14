var http = require('http')
var fs = require('fs')
var path = require('path')
var url = require('url')

var fsHtmlPath = path.join(path.resolve(), 'fs.html')
console.log('=====', fsHtmlPath)

function serverStart (route) {
    var server = http.createServer(function (req, res) {
        //将请求的url解析为url对象
        var urlObj = url.parse(req.url)
        //在serverStart函数内调用route函数并且传入参数
        route(urlObj.pathname)
        if (urlObj.pathname == '/') {
            fs.access(fsHtmlPath, fs.constants.F_OK, function () {
                console.log('no access!')
            })
            res.writeHead(200, {"Content-Type": 'text/html'})
            fs.createReadStream('./fs.html').pipe(res)
        }
    })
    server.listen(5678)
    console.log('Server is running at http://127.0.0.1:5678')
}
exports.serverStart = serverStart
