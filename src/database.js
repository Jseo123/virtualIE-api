const mysql = require('mysql');
require('dotenv').config()

const mysqlConnection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    databse: process.env.DATABASE,
})

mysqlConnection.connect(function (err) {
    if(err) {
        console.log(err);
        return;
    } else {
        console.log('Db is connected')
    }
})

export {mysqlConnection}