var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var LessonSchema   = new Schema({
    StartDate: Date,
    StartDay: String,
    StartTime: String,
    Duration: Number,
    StudentName: String,
    StudentPhone: String,
    StudentEmail: String, 
    Coach: String,
    Description: String,
    Status: String
});

module.exports = mongoose.model('Lesson', LessonSchema);