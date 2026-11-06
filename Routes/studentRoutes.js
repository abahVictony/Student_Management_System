const express = require('express');

const { createStudent, getAllStudents, getOneStudentWhereClause, updateStudent, deleteStudent } = require('../controllers/studentController');
const { createStudentValidation } = require('../Middlewares/studentValidation');

const router = express.Router()


router.post('/newStudent',createStudentValidation, createStudent)
router.get('/allStudents', getAllStudents)
router.get('/oneStudent', getOneStudentWhereClause)
router.patch('/updateStudent', updateStudent)
router.delete('/deleteStudent', deleteStudent)


module.exports = router