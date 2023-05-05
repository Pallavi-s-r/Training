const classModel = require("../models/classModel")
const studentModel= require("../models/studentModel")

const createClass= async function (req, res) {
    let data = req.body;
    let classCreated = await classModel.create(data);
    res.send({data: classCreated});
}

const getClassDetails= async function (req, res) {
    let data = await classModel.find()
    res.send({data: data})
}

const getClassWithStudentDetails = async function (req, res) {
    let specificStudent = await classModel.find().populate('student_id');
    res.send({data: specificStudent});

}
const deleteStudent = async function(req,res){
    let deletedStudent = await studentModel.deleteOne();
    res.send({data:deletedStudent},{timeout:3000});
}

module.exports.createClass= createClass
module.exports.getClassDetails= getClassDetails
module.exports.deleteStudent = deleteStudent;
module.exports.getClassWithStudentDetails = getClassWithStudentDetails
