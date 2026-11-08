const express = require('express');
const router = express.Router();

const {createDepartment, getOneDepartment, getAllDepartments, updateDepartment, deleteDepartment} = require ('../controllers/departmentController.js')


const {createDepartmentValidation, updateDepartmentValidation } = require('../Middlewares/departmentValidation.js')

router.post('/creatDepartment', createDepartmentValidation,createDepartment);
router.get('/allDepartment/', getAllDepartments)
router.get('/oneDepartment/:id', getOneDepartment)
router.patch('/updateDepartment/:id', updateDepartmentValidation, updateDepartment)
router.delete('/deleteDepartment/:id', deleteDepartment)


module.exports = router