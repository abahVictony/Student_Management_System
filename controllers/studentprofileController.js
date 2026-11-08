const { StudentProfile, Student } = require('../models');

const createStudentProfile = async (req, res) => {
  try {
    const { studentId } = req.params
    const { gender, address, dateOfBirth, phonenumber, guardianName ,guardianPhone, bio } = req.body;
    const student = await Student.findByPk(studentId);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const existingProfile = await StudentProfile.findOne({ where: { studentId } });
    if (existingProfile) {
      return res.status(400).json({ message: 'Student profile already exists' });
    }

    const profile = await StudentProfile.create({
      phonenumber,
      address,
      dateOfBirth,
      gender,
      guardianName,
      guardianPhone,
      bio,
      studentId
    });

    return res.status(201).json({
      message: 'Student profile created successfully',
      data: profile,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating student profile', error: error.message });
  }
};

const getStudentProfile = async (req, res) => {
  try {
    const { studentId } = req.params;

    const profile = await StudentProfile.findOne({
      where: { studentId },
      include: [
        {
          model: Student,
          as: 'student',
          attributes: [ 'firstName', 'lastName', 'email'],
        },
      ],
    });

    if (!profile) {
      return res.status(404).json({ message: 'Student profile not found' });
    }
    res.status(200).json({ 
        message: 'Student Profile Found',
        data: profile
    });
  } catch (error) {
    res.status(500).json({ 
        message: error.message });
  }
};

const updateStudentProfile = async (req, res) => {
  try {
    const { studentId } = req.params;
    const {gender, address, dateOfBirth, phonenumber, guardianName ,guardianPhone, bio} = req.body;

    const profile = await StudentProfile.findOne({ where: { studentId } });

    if (!profile) {
      return res.status(404).json({ message: 'Student profile not found' });
    }

    const updateStudentProfile = await profile.update({
        gender,
        address,
        dateOfBirth,
        phonenumber,
        guardianName,
        guardianPhone,
        bio
      
    },{where: {id}});

    return res.status(200).json({
      message: 'Student profile updated successfully',
      data: profile,
    });

  } catch (error) {
     res.status(500).json({
     message: error.message });
  }
};

const deleteStudentProfile = async (req, res) => {
  try {
    const { studentId } = req.params;

    const profile = await StudentProfile.findOne({ where: { studentId } });

    if (!profile) {
      return res.status(404).json({ message: 'Student profile not found' });
    }

    await profile.destroy();
    return res.status(200).json({ message: 'Student profile deleted successfully' });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createStudentProfile,
  getStudentProfile,
  updateStudentProfile,
  deleteStudentProfile,
};