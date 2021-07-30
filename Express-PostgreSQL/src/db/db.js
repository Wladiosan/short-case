const Pool = require('pg').Pool
const pool = new Pool({
    user: 'admin',
    password: 1234567890,
    database: 'express',
    host: 'localhost',
    port: 5432
})

module.exports = pool