/**
 * Created by yzjf on 2014/6/15.
 */
var models = require('../model');
var Article = models.Article;
/**
 * 根据内容的id查找内容
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} id  内容的"_id"
 * @param {Function} callback 回调函数
 */
exports.getArticleById = function (id, callback) {
    Article
        .findOne({'_id': id})
        .exec(callback);
};

/**
 * 根据内容页的id查找内容
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} id  内容页的"_id"
 * @param {Function} callback 回调函数
 */
exports.getArticlesByArticleListId = function (articleListId, callback) {
    Article
        .find({'articleListId': articleListId})
        .exec(callback);
};

/**
 * 更新内容
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {Object} param  属性
 * @param {Function} callback 回调函数
 */
exports.updateArticleById = function (id, param, callback) {
    Article
        .update({'_id': id}, param)
        .exec(callback);
};


exports.newAndSave = function (param, callback) {
    var article = new Article();
    article.title = param.title || "title";
    article.misc = param.misc || "misc";
    article.content = param.content || "";
    article.status = param.status || false;
    article.articleListId = param.articleListId || "000000";
    article.save(callback);
};