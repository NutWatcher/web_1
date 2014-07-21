/**
 * Created by yzjf on 2014/6/12.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require('../config').config;
var ArticleSchema = new Schema({
    title: { type: String , default: 'My Title'},
    title_image: { type: String , default: './images/logo.jpg'},
    misc: { type: String , default: 'My misc' },
    content: { type: String , default: 'My Content' },
    data: { type: String , default: Date.now },
    status: { type: Boolean , default: false },
    sort_index: { type: Number , default: Date.now },
    articleListId: { type: Schema.Types.ObjectId , index: true }
});

mongoose.model('Article', ArticleSchema);