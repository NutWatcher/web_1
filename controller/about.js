/**
 * Created by jia on 2014/7/29.
 */
var config = require('../config').config;
var ArticleList = require('../dao').ArticleList;
var Article = require('../dao').Article;
var fs = require("fs");
var url = require("url");
var path = require("path");
exports.about = function(req, res, next) {
    var ArticleListCode = config.articleList.about.code ;
    ArticleList.getArticleListByCode(ArticleListCode, function(err, data){
        if (err){
            return next(err) ;
        }
        else{
            if (!data){
                return res.render('about', { title: '联系我们', content: '没有介绍！' });
            }
            Article.getArticlesByArticleListId(data._id, function(err, ArticleData){
                if (err){
                    return next(err) ;
                }
                else{
                    if (ArticleData.length == 0){
                        res.render('about', { title: '联系我们', content: '没有介绍！' });
                    }
                    else{
                        res.render('about', {
                            title: '联系我们',
                            contentTitle: ArticleData[0].title,
                            content: ArticleData[0].content
                        });
                    }
                }
            });
        }
    });
}