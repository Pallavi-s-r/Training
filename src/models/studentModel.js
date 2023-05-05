const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const studentSchema = new mongoose.Schema( {
    studentName: String,
    student_id: String,
    favSubject : [String],
    averageMarks:Number
}, { timestamps: true });


module.exports = mongoose.model('Student', studentSchema);