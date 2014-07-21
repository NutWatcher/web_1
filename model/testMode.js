/**
 * Created by yzjf on 2014/6/12.
 */
var Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

var BlogPost = new Schema({
    author    : ObjectId
    , title     : String
    , body      : String
    , date      : Date
});