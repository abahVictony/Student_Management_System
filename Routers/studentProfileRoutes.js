const express = require('express')
const { createStudentProfile, getStudentProfile, updateStudentProfile, deleteStudentProfile } = require('../controllers/studentprofileController')

const { createStudentProfileValidation, updateStudentProfileValidation } = require('../Middlewares/studentProfileValidation')

const router = express.Router()

router.post('/newStudentProfile/:studentId',createStudentProfileValidation, createStudentProfile)
router.get('/getProfile', getStudentProfile)
router.patch('/updateProfile', updateStudentProfileValidation, updateStudentProfile)
router.delete('/deleteProfile', deleteStudentProfile)

module.exports = router