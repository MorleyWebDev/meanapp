var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true
    },
    reviewid: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
}, {timestamps:true

});




module.exports = mongoose.model('Comment', CommentSchema);