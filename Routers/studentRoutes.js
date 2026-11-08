const express = require('express');

const { createStudent, getAllStudents,   getOneStudent, getOneStudentWhereClause, updateStudent, deleteStudent } = require('../controllers/studentController');
const { createStudentValidation } = require('../Middlewares/studentValidation');

const router = express.Router()


router.post('/createStudent/:departmentId',createStudentValidation, createStudent)
router.get('/allStudents', getAllStudents)
router.get('/oneStudent/:id', getOneStudentWhereClause)
router.get('/getonestudent/:id',  getOneStudent)
router.patch('/updateStudent/:id', updateStudent)
router.delete('/deleteStudent/:id', deleteStudent)


module.exports = router