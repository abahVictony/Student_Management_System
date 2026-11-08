const Joi = require('joi');
const { Model } = require('sequelize');


const createDepartmentValidation = (req,res) =>{
    const createDepartmentSchema = Joi.object({
        department_name: Joi.string().required()
    })


    const { error } = createDepartmentSchema.validate(req.body);

            
        if (error) {
            return res.status(400).json({message: error.details[0].message})
        }


        next()

}


const updateDepartmentValidation = (req,res) =>{
    const updateDepartmentSchema = Joi.object({
        department_name: Joi.string().required()
    })


    const { error } = updateDepartmentSchema.validate(req.body);

            
        if (error) {
            return res.status(400).json({message: error.details[0].message})
        }


        next()



}


module.exports = {
    createDepartmentValidation,
    updateDepartmentValidation
}