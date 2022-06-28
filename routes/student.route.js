const { testApi, addStudent, getStudents, getStudentById, deleteStudentById, updateStudentById } = require('../controllers/student.controller');

const StudentRoute = require('express').Router();

StudentRoute.get('/', testApi);
StudentRoute.post('/add-student', addStudent);
StudentRoute.get('/students', getStudents);
StudentRoute.get('/student/:id', getStudentById);
StudentRoute.delete('/student/:id', deleteStudentById);
StudentRoute.put('/student/:id', updateStudentById);

module.exports = StudentRoute;