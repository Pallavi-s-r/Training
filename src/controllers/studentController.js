const classModel = require("../models/classModel")
const studentModel= require("../models/studentModel")

const createStudent= async function (req, res) {
    let data = req.body;
    let studentCreated = await studentModel.create(data);
    res.send({data: studentCreated});
}

const getStudents= async function (req, res) {
    let data = await studentModel.find()
    res.send({data: data})
}


module.exports.createStudent= createStudent
module.exports.getStudents= getStudents;
