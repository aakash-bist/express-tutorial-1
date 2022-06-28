const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');

// to configure dotenv
const dotEnv = require('dotenv');
dotEnv.config();

// apply middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import routes
const StudentRoute = require('./routes/student.route');
app.use('/student', StudentRoute);

// let students = [];

// // test api
// app.get('/',(req,res)=>{
//     res.status(200).json({
//         status:200,
//         message: 'API WORKING !!'
//     });
// });

// // test hello world api
// app.get('/hello-world',(req,res)=>{
//     res.status(200).json({
//         status:200,
//         message: 'Hello World !!'
//     });
// });

// // to add student
// app.post('/add-student', (req,res)=>{
//     const { name, age, course } = req.body;
//     const newStudent = {
//         id: uuidv4(),
//         name,
//         age,
//         course
//     }
//     students.push(newStudent);
//     res.status(201).json({
//         status:201,
//         message: 'Student added successfully !!'
//     });
// });

// // to get all students
// app.get('/students', (req,res)=>{
//     res.status(200).json({
//         status:200,
//         data: students
//     });
// });


// // to get a student by id
// app.get('/student/:id',(req,res)=>{
//     console.log(req.params)
//     const student = students.find(std=>std.id === req.params.id);
//     if(!student) return res.status(404).json({
//         status:404,
//         message: 'Student not found !!'
//     });
//     res.status(200).json({
//         status:200,
//         data: student
//     });
// })


// // // to delete a student by id
// app.delete('/student/:id',(req,res)=>{
//     const student = students.find(std=>std.id === req.params.id);
//     if(!student) return res.status(404).json({
//         status:404,
//         message: 'Student not found !!'
//     });
//     students = students.filter(std=>std.id !== req.params.id);
//     res.status(200).json({
//         status:200,
//         message: 'Student deleted successfully !!'
//     });
// });


// // to update a student by id
// app.put('/student/:id',(req,res)=>{
//     const student = students.find(std=>std.id === req.params.id);
//     if(!student) return res.status(404).json({
//         status:404,
//         message: 'Student not found !!'
//     });
//     const { name, age, course } = req.body;
//     student.name = name;
//     student.age = age;
//     student.course = course;
//     res.status(200).json({
//         status:200,
//         message: 'Student updated successfully !!'
//     });
// });


// to define port
const port = process.env.PORT || 3333;

// listen to port
app.listen(port, (err) => {
    if (err) console.log(err);
    else console.log(`Server is running on port ${port}`);
});