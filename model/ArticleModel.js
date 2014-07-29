/**
 * Created by yzjf on 2014/6/12.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ArticleSchema = new Schema({
    title: { type: String , default: 'My Title'},
    misc: { type: String , default: 'My misc' },
    coverImage:{ type: String , default: '' },
    content: { type: String , default: 'My Content' },
    data: { type: String , default: Date.now },
    status: { type: Boolean , default: false },
    sort_index: { type: Number , default: Date.now },
    articleListId: { type: Schema.Types.ObjectId , index: true }
});

mongoose.model('Article', ArticleSchema);