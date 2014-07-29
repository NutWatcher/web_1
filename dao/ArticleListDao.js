/**
 * Created by yzjf on 2014/6/15.
 */
var models = require('../model');
var ArticleList = models.ArticleList;

/**
 * 根据code查找内容页
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} id  _id
 * @param {Function} callback 回调函数
 */
exports.getArticleListByCode = function (code, callback) {
    ArticleList
        .findOne({'code': code})
        .exec(callback);
};

/**
 * 获得内容页信息
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} id 用户id
 */
exports.getArticleListsByUserId = function (id, callback) {
    ArticleList
        .find({'userId': id})
        .exec(callback);
};

/**
* 插入文章外链
* Callback:
* - err, 数据库异常
* - user, 用户
* @param {String} articleListId  内容页ID
* @param {String} articleId  文章ID
* @param {Function} callback 回调函数
*/
exports.pushArticleToArticleList = function (articleListId, articleId, callback) {
    var cc = 0 ;
    ArticleList
        .find({'_id': articleListId})
        .update({$push:{"content":"34534534554"}})
        .exec(callback);
};
exports.newAndSave = function (param, callback) {
    var articleList = new ArticleList();
    articleList.description = param.description;
    articleList.code = param.code;
    articleList.userId = param.userId;
    articleList.save(callback);
};

