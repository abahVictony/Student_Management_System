const express = require('express');
const router = express.Router();

const {createDepartment, getOneDepartment, getAllDepartments, updateDepartment, deleteDepartment} = require ('../controllers/departmentController.js')

router.post('/newDepartment/:userId', createDepartment);
router.get('/allDepartment/', getAllDepartments)
router.get('/oneDepartment/:id', getOneDepartment)
router.patch('/updateDepartmentName/:department_name', updateDepartment)
router.delete('/deleteDepartment/:id', deleteDepartment)
module.exports = router