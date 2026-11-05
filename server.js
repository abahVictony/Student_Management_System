const express = require('express');
require('dotenv').config()

const sequelize = require('./database/database')


const PORT = process.env.PORT || 1221
const app = express()

app.use(express.json())

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