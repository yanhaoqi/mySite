/**
 * Created by yanhaoqi on 2017/12/14.
 */
function route (handle, pathname, response) {
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
    if (typeof(handle[pathname]) === 'function') {
        response.write(handle[pathname]())
        response.end()
    } else {
        response.write('没有' + pathname + '这个路由')
        response.end()
    }
}
exports.route = route