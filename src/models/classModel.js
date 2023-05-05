const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const classSchema = new mongoose.Schema( {
    className: String,
    student_id: {
        type: ObjectId,
        ref: "Student"
    }, 
    classType : String,
    numberOfStudents : Number

}, { timestamps: true });


module.exports = mongoose.model('Class', classSchema);