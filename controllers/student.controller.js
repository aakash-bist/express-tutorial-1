const { v4: uuidv4 } = require('uuid');

let students = [];

const testApi = (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'API WORKING !!'
    });
}

const addStudent = (req, res) => {
    const { name, age, course } = req.body;
    const newStudent = {
        id: uuidv4(),
        name,
        age,
        course
    }
    students.push(newStudent);
    res.status(201).json({
        status: 201,
        message: 'Student added successfully !!'
    });
};

const getStudents = (req, res) => {
    res.status(200).json({
        status: 200,
        data: students
    });
}

const getStudentById = (req, res) => {
    const student = students.find(std => std.id === req.params.id);
    if (!student) return res.status(404).json({
        status: 404,
        message: 'Student not found !!'
    });
    res.status(200).json({
        status: 200,
        data: student
    });
}

const deleteStudentById = (req, res) => {
    const student = students.find(std => std.id === req.params.id);
    if (!student) return res.status(404).json({
        status: 404,
        message: 'Student not found !!'
    });
    students = students.filter(std => std.id !== req.params.id);
    res.status(200).json({
        status: 200,
        message: 'Student deleted successfully !!'
    });
}

const updateStudentById = (req, res) => {
    const student = students.find(std => std.id === req.params.id);
    if (!student) return res.status(404).json({
        status: 404,
        message: 'Student not found !!'
    });
    const { name, age, course } = req.body;
    student.name = name;
    student.age = age;
    student.course = course;
    res.status(200).json({
        status: 200,
        message: 'Student updated successfully !!'
    });
}
module.exports = {
    testApi,
    addStudent,
    getStudents,
    getStudentById,
    deleteStudentById,
    updateStudentById
}