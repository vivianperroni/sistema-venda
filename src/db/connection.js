const {Pool} = require('pg')

const db = new Pool({
    user:'vivian',
    host:'localhost',
    database:'sistema_vendas',
    password:'vpo',
    port:5432
})

db.connect()
module.exports = {db}