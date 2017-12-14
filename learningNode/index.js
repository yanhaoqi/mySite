/**
 * Created by yanhaoqi on 2017/12/14.
 */
var server = require('./file_server')
var router = require('./router')
//启动服务器
// 把route函数左外参数传入serverStart函数
server.serverStart(router.route)