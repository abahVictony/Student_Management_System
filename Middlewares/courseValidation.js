const Joi = require("joi")



const createCourseValidation = (req,res,next) => {
    createCourseSchema = Joi.object({
        courseCode: Joi.string()
            .trim()
            .uppercase()
            .required(),

        courseTitle: Joi.string()
            .trim()
            .min(3)
            .max(100)
            .required(),

        creditUnit: Joi.number()
            .integer()
            .min(1)
            .max(6)
            .required()
        });


        const { error } = createCourseSchema.validate(req.body);

            
        if (error) {
            return res.status(400).json({
            message: error.details[0].message
            })
        }

        next()

    }


const updateCourseValidation = (req,res,next) => {
    updateCourseSchema = Joi.object({
        courseCode: Joi.string()
            .trim()
            .uppercase()
            .optional(),

        courseTitle: Joi.string()
            .trim()
            .min(3)
            .max(100)
            .optional(),

        creditUnit: Joi.number()
            .integer()
            .min(1)
            .max(6)
            .optional()
        });


        const { error } = updateCourseSchema.validate(req.body);

            
        if (error) {
            return res.status(400).json({message: error.details[0].message})
        }


        next()


}
    

module.exports = {
    createCourseValidation,
    updateCourseValidation
}