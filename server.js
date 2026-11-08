const express = require('express');
require('dotenv').config()

const sequelize = require('./database/database')

const departmentRoute = require('./Routers/departmentRoutes')

const courseRoute = require('./Routers/courseRoutes')

const studentProfileRoute = require('./Routers/studentProfileRoutes')

const studentRoute = require('./Routers/studentRoutes')

const PORT = process.env.PORT || 1221
const app = express()

app.use(express.json())

app.use(departmentRoute)

app.use(courseRoute)

app.use(studentProfileRoute)

app.use(studentRoute)

const dbConnect = async()=>{
try {
    await sequelize.authenticate()
    console.log('Connection to Server Established Successfully')
} catch (error) {
    console.error('Failed to connect to Database', error.message)
}
}
dbConnect()

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT :${PORT}`);
    
})