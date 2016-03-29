var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var LessonSchema   = new Schema({
    StartDate: String,
    Duration: Number,
    Student: String,
    Coach: String,
    Description: String,
    Status: String
});

module.exports = mongoose.model('Lesson', LessonSchema);