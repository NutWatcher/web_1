/**
 * Created by yzjf on 2014/7/21.
 */
var files = require('./controller/files');
module.exports = function (app) {
    // home page
    app.get('/', files.admin);
    app.get('/getImage/*', files.getImage);
    app.get('/getFile/*', files.getFile);

};