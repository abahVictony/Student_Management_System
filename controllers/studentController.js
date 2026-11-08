const { Student, Departments, StudentProfile, Course } = require('../models')


const createStudent = async (req, res) =>{
    try {
        const { departmentId } = req.params
        const { firstName, lastName, email, status } = req.body

        const department = await Departments.findByPk(departmentId)

        if(!department){
            return res.status(404).json({message: "Department not found"})
        }


        const existingStudent = await Student.findOne({ where: { email } })

        if (existingStudent) {
         return res.status(400).json({ message: `Student with Email ${email} already exists` })   
        }

        const newStudent = await Student.create({
            firstName,
            lastName,
            email,
            status,
            departmentId
        })

         return res.status(201).json({
            message: 'Student Created Successfully',
            data: newStudent
         })
    } catch (error) {
            console.error(error)
            return res.status(500).json({ message: error.message })
        } 
}

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll();

        return res.status(200).json({
            message: `All students and the total is: ${students.length}`,
            data: students
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


const getOneStudent = async(req,res) => {
    try {
        const { id } = req.params;
        const oneStudent = await Student.findByPk(id, {
            include :{
                model:StudentCourse,
                include :{
                    model: Course,
                    as: 'course',
                   attributes: ["courseCourse", "courseTitle", "creditUnit"]
                },

                include:{
                    model: StudentProfile,
                    as: 'studentProfile',
                    attributes:[ "gender", "phonenumber"]

                }
            }
        })

        if(!oneStudent){
                return res.status(404).json({message: "Student not found"})
            }

        return res.status(200).json({
            message: "Student found successfully", data:oneStudent
        })

    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}


const getOneStudentWhereClause = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findAll({ where: { id } });

        if (student.length == 0) {
            return res.status(404).json({
                message: "Student not found"
            })
        }
        return res.status(200).json({
            message: "Student Found",
            data: student
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const updateStudent = async(req, res) =>{
    const {id} = req.params
    const student = await Student.findOne({where: {id}})
    const {firstName, lastName, email, status} = req.body 

    if(!student) {
        return res.status(404).json({
            message: `Student does not exist`
        })
    }

   const updateStudent = await Student.update({
        firstName,
        lastName,
        email,
        status
    },{where: {id}})

    return res.status(200).json({
            message: "Student Updated Successfully",
            data: updateStudent
        })
}

const deleteStudent = async (req, res) =>{
    try {
        const {id} = req.params
        const student = await Student.findOne({where: {id}})

        if (!student) {
            return res.status(200).json({
                message: `Student Does Not Exist`
            })
        }

        await Student.destroy({where : {id}})
        return res.status(200).json({
            message: `Student Deleted Successfully`
        })
    } catch (error) {
         return res.status(500).json({
        message: error.message
    })
    }
}

module.exports = {
    createStudent,
    getAllStudents,
    getOneStudent,
    getOneStudentWhereClause,
    updateStudent,
    deleteStudent
}