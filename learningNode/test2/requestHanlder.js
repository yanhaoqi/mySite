/**
 * Created by yanhaoqi on 2017/12/14.
 */
function start () {
    function sleep (num) {
        var startTime = new Date().getTime()
        while(new Date().getTime() < startTime + num)
        {}
    }
    sleep(10000)
    return '<h1>我是/start的响应===</h1><a href="http://localhost:6789/upload">GO uploadPage</a>'
}
function upload () {
    return '<h1>我是/upload的响应</h1><a href="http://localhost:6789/start">GO startPage</a>'
}
exports.start = start
exports.upload = upload