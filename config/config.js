require('dotenv').config()

const db = process.env.DBNAME;
const password = process.env.DBPASSWORD;
const username = process.env.DBUSERNAME;
const host = process.env.DBHOST;
const Port = process.env.DBPORT;

module.exports ={
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": username,
    "password": password,
    "database": db,
    "host": host,
    "dialect": "mysql",
    "port": Port
  }
}
