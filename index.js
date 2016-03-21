var fs = require('fs');
var os = require('os');

var cls = require('./console');

/**
 * 控制台彩色打印
 */
module.exports.console = cls;

/**
 * 处理browserify模块bundle时的错误，并将错误组装为js语法
 */
module.exports.disposeBrowserifyError = function(err) {
    var msg = err.message.split(' from ')[0].replace(/\'/g, '') + ', please install before you require it';
    console.danger('WARN'.inverse + ' ' + msg.magenta);
    return 'console.error(\'' + msg + '\');';
};

/**
 * 获取本机在局域网中的IP地址
 */
module.exports.getRemoteIP = function() {
    var ifs = os.networkInterfaces();
    var ips = [];
    for (var i in ifs) {
        if (ifs[i] instanceof Array) {
            ifs[i].forEach(function(o) {
                if (o && o.address && o.address !== '127.0.0.1' && o.family === 'IPv4') {
                    ips.push(o.address);
                }
            });
        } else if (ifs[i] && typeof ifs[i] == 'object' && ifs[i].address && ifs[i].address !== '127.0.0.1' && ifs[i].family === 'IPv4') {
            ips.push(ifs[i].address);
        }
    }

    if (ips.length) return ips[0];
    else return '127.0.0.1';
};
