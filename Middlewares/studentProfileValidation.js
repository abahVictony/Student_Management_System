const Joi = require('joi')

const createStudentProfileValidation = (req, res, next)=>{
    const studentProfileSchema = Joi.object({
     gender: Joi.string().valid('Male', 'Female',).required().messages({
      'any.only': 'Gender must be male or female',
      'any.required': 'Gender is required',
     }),

     address: Joi.string().trim().min(5).max(200).required().messages({
      'string.empty': 'Address is required',
      'string.empty.base': 'Please Input Your Address',
      'string.min': 'Address must be at least 5 characters',
      'string.max': 'Address must not exceed 200 characters',
     }),

     dateOfBirth: Joi.date().max('now').required().messages({
      'date.base': 'Date of birth must be a valid date',
      'date.max': 'Date of birth cannot be in the future',
      'any.required': 'Date of birth is required',
     }),

     phonenumber: Joi.string().pattern(/^[0-9+]{10,15}$/).required().messages({
      'string.pattern.base': 'Phone number must be 10–15 digits (with optional +)',
      'any.required': 'Phone number is required',
     }),

     guardianName: Joi.string().trim().min(2).max(100).required().messages({
      'string.empty': 'Guardian name is required',
      'string.min': 'Guardian name must be at least 2 characters',
      'string.max': 'Guardian name must not exceed 100 characters',
     }),

     guardianPhone: Joi.string().pattern(/^[0-9+]{10,15}$/).required().messages({
      'string.pattern.base': 'Guardian phone must be 10–15 digits (with optional +)',
      'any.required': 'Guardian phone is required',
     }),

     bio: Joi.string().trim().max(500).messages({
      'string.max': 'Bio must not exceed 500 characters',
     }),

    })

    const { error } =studentProfileSchema.validate(req.body);

    
  if (error) {
    return res.status(400).json({
      message: error.details[0].message
    })
  }
next()
}

module.exports={
    createStudentProfileValidation
}