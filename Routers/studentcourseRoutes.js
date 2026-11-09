const express = require('express');

const { registerCourse, deleteCourseRegistration } = require("../controllers/studentcourseController")

const router = express.Router()

router.post("/courseregistration", registerCourse)
router.delete("/deleteCourseRegistration",deleteCourseRegistration)

module.exports = router