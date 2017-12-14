/**
 * Created by yanhaoqi on 2017/12/14.
 */
//定义并暴露一系列请求处理器
function start () {
    console.log('request handler: start was called')
    return '<h1>我是start路由的响应</h1>&nbsp;&nbsp;<a href="http://localhost:5678/upload">GO uploadPage</a>'
}
function upload () {
    console.log('request handler: upload was called')
    return '<h1>我是upload路由的响应</h1>&nbsp;&nbsp;<a href="http://localhost:5678/start">GO startPage</a>'
}
exports.start = start
exports.upload = upload
