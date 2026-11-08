const { Course, Student, StudentCourse } = ("../models")


const createCourse = async(req, res)=> {
    try{
        const { studentId } = req.params;
        const { courseCode, courseTitle, creditUnit } = req.body;

        const student = await Student.findByPk(studentId);

        if (!student){
            return res.status(404).json({message:"Error creating New course: Student does not existed"})
        }

        const newCourse = await Course.create({
            courseCode, 
            courseTitle, 
            creditUnit,
            studentId
        })

        return res.status(201).json({messsage:"Course successfully created", data:newCourse})

    }catch(error){
        return res.status(500).json({
            error:error.message
        })
    }
}

const getAllCourse = async(req, res)=>{
    try{
        const allCourse = await Course.findAll();
        return res.status(200).json({message:`The total number of all course are ${allCourse.length}`, data: allCourse
        })
    }catch(error){
        return res.status(500).json({
            error:error.message
        })

    }
}


const getOneCourse = async(req,res) => {
    try {
        const { id } = req.params;
        const oneCourse = await Course.findByPk(id, {
            include :{
                model:StudentCourse,
                include :{
                    model: Student,
                    as: 'students',
                    attributes: ["firstName", "lastName"]
                }
            }
        })

        if(!oneCourse){
                return res.status(404).json({message: "Course not found"})
            }

        return res.status(200).json({
            message: "Course found successfully", data:oneCourse
        })

    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}


const updateCourse = async (req, res)=>{
    try {
        const { id } = req.params
        const { courseCode, courseTitle, creditUnit } = req.body

        const course = await Course.findByPk(id)

        if(course){
            return res.status(404).json({message:"Course not found"
            })
        }

        const updateCourse = await Course.update({courseCode, courseTitle, creditUnit}, {where : {id}})
        return res.status(201).json({messsage:"Course successfully updated", data:updateCourse})

    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}


const deleteCourse = async (req, res) => {
    try{
        const { id } = req.params
        const course = await Course.findAll({where : { id }})

        if (!course){
           return res.status(404).json({message: "Course not found"})
        }

        await Course.destroy({where : { id }})
        return res.status(200).json({message : "Course successfully deleted"}) 
    }catch(error){
        res.status(500).json({message: error.message})
    }
}



module.exports = {
    createCourse,
    getAllCourse,
    getOneCourse,
    updateCourse,
    deleteCourse
}