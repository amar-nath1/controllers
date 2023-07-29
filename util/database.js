
const mysql=require('mysql2')
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'nodecomplete',
    password:'Admin@123'
})

module.exports=pool.promise()