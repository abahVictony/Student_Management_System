const express = require('express')
const { createStudentProfile, getStudentProfile, updateStudentProfile, deleteStudentProfile } = require('../controllers/studentprofileController')
const { createStudentProfileValidation } = require('../Middlewares/studentProfileValidation')

const router = express.Router()

router.post('/newStudentProfile',createStudentProfileValidation, createStudentProfile)
router.get('/getProfile', getStudentProfile)
router.patch('/updateProfile', updateStudentProfile)
router.delete('/deleteProfile', deleteStudentProfile)

module.exports = router