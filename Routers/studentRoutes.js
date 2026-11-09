const express = require('express');

const { createStudent, getAllStudents,   getOneStudent, updateStudent, deleteStudent } = require('../controllers/studentController');
const { createStudentValidation, updateStudentValidation } = require('../Middlewares/studentValidation');

const router = express.Router()


router.post('/createStudent/:departmentId',createStudentValidation, createStudent)
router.get('/allStudents', getAllStudents)

router.get('/onestudent/:id',  getOneStudent)
router.patch('/updateStudent/:id', updateStudentValidation, updateStudent)
router.delete('/deleteStudent/:id', deleteStudent)


module.exports = router