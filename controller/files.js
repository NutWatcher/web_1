/**
 * Created by yzjf on 2014/7/21.
 */
var config = require('../config').config;
var fs = require("fs");
var url = require("url");
var path = require("path");
exports.admin = function(req, res, next) {
    res.render('index', { title: 'Express' });
}
exports.contact = function(req, res, next) {
    res.render('contact', { title: '联系我们' });
}
exports.getFile= function (req, res, next) {
    var pathname = decodeURI(url.parse(req.url).pathname).slice("/getFile".length);
    var realPath = config.file_path + pathname;
    path.exists(realPath, function (exists) {
        if (!exists) {
            res.send(404, "This request URL " + pathname + " was not found on this server.");
        } else {
            fs.readFile(realPath, "binary", function(err, file) {
                if (err) {
                    next(err) ;
                    return ;
                } else {
                    res.download(realPath,'附件');
                }
            });
        }
    });
};
