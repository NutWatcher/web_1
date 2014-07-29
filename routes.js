/**
 * Created by yzjf on 2014/7/21.
 */
var files = require('./controller/files');
var about = require('./controller/about');
module.exports = function (app) {
    // home page
    app.get('/', files.admin);
    app.get('/about', about.about);
    app.get('/contact', files.contact);
    app.get('/getFile/*', files.getFile);

};