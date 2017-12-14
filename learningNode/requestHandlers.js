/**
 * Created by yanhaoqi on 2017/12/14.
 */
//定义并暴露一系列请求处理器
function start () {
    console.log('request handler: start was called')
}
function upload () {
    console.log('request handler: upload was called')
}
exports.start = start
exports.upload = upload
