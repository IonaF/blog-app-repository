var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  commentText: String,
  by: String,
  on: {type: Date, default: Date.now}
});

mongoose.model('Comment', CommentSchema);