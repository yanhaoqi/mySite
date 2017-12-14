/**
 * Created by yanhaoqi on 2017/12/14.
 */
var server = require('./server')
var requestHandle = require('./requestHanlder')
var router = require('./router')

//建立url和请求处理器的映射
var handle = {}
handle['/'] = requestHandle.start
handle['/start'] = requestHandle.start
handle['/upload'] = requestHandle.upload
//启动服务器 传入实参
server.start(router.route, handle)