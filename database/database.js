const { Sequelize } = require('sequelize');


const db = process.env.DBNAME;
const password = process.env.DBPASSWORD;
const username = process.env.DBUSERNAME;
const host = process.env.DBHOST;
const Port = process.env.DBPORT;

const sequelize = new Sequelize(db, username, password, {
    host: host,
    dialect: 'mysql',
    port: Port
})

module.exports = sequelize