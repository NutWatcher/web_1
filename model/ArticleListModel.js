/**
 * Created by yzjf on 2014/6/12.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require('../config').config;

var ArticleListSchema = new Schema({
    description: { type: String },
    code: { type: String , unique : true},
    userId:{ type: Schema.Types.ObjectId, index: true }
});

mongoose.model('ArticleList', ArticleListSchema);