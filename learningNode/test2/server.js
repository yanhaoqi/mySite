/**
 * Created by yanhaoqi on 2017/12/14.
 */
var http = require('http')
var url = require('url')
function start (route, handle) {
    http.createServer(function (request, response) {
        var pathname = url.parse(request.url).pathname
        route(handle, pathname, response)
    }).listen('6789')
}
exports.start = start