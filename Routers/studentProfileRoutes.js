const express = require('express')
const { createStudentProfile, getStudentProfile, updateStudentProfile, deleteStudentProfile } = require('../controllers/studentprofileController')

const { createStudentProfileValidation, updateStudentProfileValidation } = require('../Middlewares/studentProfileValidation')

const router = express.Router()

router.post('/newStudentProfile/:studentId',createStudentProfileValidation, createStudentProfile)
router.get('/getProfile/:id', getStudentProfile)
router.patch('/updateProfile/:id', updateStudentProfileValidation, updateStudentProfile)
router.delete('/deleteProfile/:id', deleteStudentProfile)

module.exports = router