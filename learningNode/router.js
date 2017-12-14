/**
 * Created by yanhaoqi on 2017/12/14.
 */
//定义并暴露一个route函数
function route(handle, pathname) {
    if (typeof(handle[pathname]) === 'function') {
        console.log(pathname, handle[pathname] === 'function')
        // console.log("=========", pathname, handle[pathname])
        return handle[pathname]()
    } else {
        console.log("No request handler found for " + pathname)
        return '<h2>404 not found</h2>'
    }
}
exports.route = route