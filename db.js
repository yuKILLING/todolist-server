const mysql = require("mysql2/promise")
require('dotenv').config()
const mysqlPool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
})

module.exports = mysqlPool
