const {Departments, Student} = require('../models')


const createDepartment = async (req, res) => {
    try {
        const { department_Name } = req.body;
        const department = await Departments.findOne({where:{department_Name}});
    

     if (department){
        return res.status(400).json({
            message: 'Department already exists'
        })
     }

     const newDepartment = await Departments.create({
        department_Name
     })

     res.status(201).json({
        message: 'User created successfully',
        data: newDepartment
     })

    }catch (error) {
      res.status(500).json({
        error: error.messagw
      })
    }

}

const getAllDepartments = async (req, res) => {
     try{
        const department = await Departments.findAll();
        res.status(200).json({
            message: `The Total number of the Department is: ${department.length}`,
            data:department
        })
     
     } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }

}

const getOneDepartment = async (req, res) => {
    try {
        const {id} = req.params;
        const department = await Departments.findByPk(id,{
            attributes: ['Department_Name'],
            include: {
                model: Student,
                as: "students",
                attributes: ["firstName", "lastName"]
            }
        });

        if (!department){
            return res.status(400).json({
                message: "Department not found"
            })
        } 
        res.status(200).json({
            message: 'Department found',
            data: department
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}


const updateDepartment = async(req, res)=>{
    try{
        const { id } = req.params
        const { department_name } = req.body
        const department = await Departments.findByPk(id)
        if (!department){
            return res.status(400).json({
                message: "Department not found"
            })
        }

        const updateDepartment = await Departments.update({ department_name }, {where: {id}})

        
    res.status(201).json({
      message:"Department_name updated Successfully",
      data: updateDepartment
    })
    }catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const deleteDepartment = async (req, res)=> {
    try {
        const { id } = req.params;
     await Departments.destroy(id)

     res.status(200).json({
        message:"Department deleted successfully"
     })
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}







module.exports = {
    createDepartment,
    getAllDepartments,
    getOneDepartment,
    updateDepartment,
    deleteDepartment
}

