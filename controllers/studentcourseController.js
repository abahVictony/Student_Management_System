const { Course, Student, StudentCourse } = require("../models")


const registerCourse = async(req, res) =>{
    try{
        const {studentId, courseId } = req.body

        const student = await Student.findByPk (studentId)

        const course = await Course.findByPk(courseId)

        if (!student){
            return res.status(404).json({message: "Student not found"})
        }

        if (!course){
            return res.status(404).json({message: "course not found"})
        }

        const registerCourse = await StudentCourse.create({
            studentId,
            courseId
        })

        return res.status(201).json({
            message: 'course registration Successfully',
            data: registerCourse
         })

    }catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const deleteCourseRegistration = async (req, res) => {
    try{
        const { id } = req.params
        const courseregiste = await StudentCourse.findAll({where : { id }})

        if (!courseregiste){
           return res.status(404).json({message: "Student has not register for this course"})
        }

        await StudentCourse.destroy({where : { id }})
        return res.status(200).json({message : "registerCourse successfully deleted"}) 
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    registerCourse,
    deleteCourseRegistration
}