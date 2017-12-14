/**
 * Created by yanhaoqi on 2017/12/14.
 */
//该文件用来启动服务

var server = require('./file_server')
var router = require('./router')
var requestHandlers = require('./requestHandlers')

//将请求处理器与对应路由通以对象中键值对的形式一一对应 并将这个对象作为serverStart的实参 进而注入到route()中
var handle = {}
handle['/'] = requestHandlers.start
handle['/start'] = requestHandlers.start
handle['/upload'] = requestHandlers.upload

//启动服务器
// 把route函数作为参数传入serverStart函数
server.serverStart(router.route, handle)