const Joi = require('joi')

const createStudentValidation = (req, res, next)=>{
    const userSchema = Joi.object({
        firstName: Joi.string().trim().pattern(new RegExp("^[A-Za-z]{3,}$")).required().messages({
            "any.required": "First Name is Required",
            "string.empty": "PLease input your FirstNAme",
            "string.pattern.base": "First name must be Alphabets and must be 3 characters long",
        }),
         lastName: Joi.string().trim().pattern(new RegExp("^[A-Za-z]{3,}$")).required().messages({
            "any.required": "Last Name is Required",
            "string.empty": "PLease input your FirstNAme",
            "string.pattern.base": "Last name must be Alphabets and must be 3 characters long",
        }),
        email: Joi.string().email().required().messages({
            "string.email": "Please enter a valid email address",
            "string.empty": "Please enter your email address",
            "any.required": "The email field is required",
        }),

        status:Joi.string().valid('Active','Suspended', 'Expelled')

        })
    

    const { error } = userSchema.validate(req.body);

    // console.log(error.details);
    
    if (error) {
        return res.status(400).json({
        message: error.details[0].message
        })
    }
next()
}

module.exports={
    createStudentValidation
}