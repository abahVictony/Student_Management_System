const { Student } = require('../models')

const createStudent = async (req, res) =>{
    try {
        const { firstName, lastName, email, departmentId, status } = req.body

        const existingStudent = await Student.findOne({ where: { email } })

        if (existingStudent) {
         return res.status(400).json({ message: `Student with Email ${email} already exists` })   
        }

        const newStudent = await Student.create({
            firstName,
            lastName,
            email,
            departmentId,
            status
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

        res.status(200).json({
            message: `All students and the total is: ${students.length}`,
            data: students
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
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
        res.status(200).json({
            message: "Student Found",
            data: student
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updateStudent = async(req, res) =>{
    const {id} = req.params
    const student = await Student.findOne({where: {id}})
    const {firstName, lastName, email, departmentId, status} = req.body 

    if(!student) {
        return res.status(404).json({
            message: `Student does not exist`
        })
    }

    await Student.update({
        firstName,
        lastName,
        email,
        departmentId,
        status
    })

    res.status(200).json({
            message: "Student Updated Successfully",
            data: student
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
    res.status(200).json({
        message: `Student Deleted Successfully`
    })
    } catch (error) {
         res.status(500).json({
        message: error.message
    })
    }
}

module.exports = {
    createStudent,
    getAllStudents,
    getOneStudentWhereClause,
    updateStudent,
    deleteStudent
}