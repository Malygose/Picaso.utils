require('colors');

/**
 * 定义控制台彩色打印方法，按照Bootstrap来进行的扩展
 */
module.exports = {
    black: function(text) {
        console.log(text.black);
    },
    danger: function(text) {
        console.log(text.red);
    },
    Default: function(text) {
        console.log(text.blue);
    },
    gray: function(text) {
        console.log(text.gray);
    },
    grey: function(text) {
        console.log(text.grey);
    },
    info: function(text) {
        console.log(text.cyan);
    },
    link: function(text) {
        console.log(text.underline);
    },
    magenta: function(text) {
        console.log(text.magenta);
    },
    success: function(text) {
        console.log(text.green);
    },
    warning: function(text) {
        console.log(text.yellow);
    },
    white: function(text) {
        console.log(text.white);
    }
};

for (var i in module.exports) {
    console[i] = module.exports[i];
}
