import mysql from 'mysql'
import dotenv from 'dotenv'
dotenv.config();

const mysqlConnection = mysql.createConnection({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
})

mysqlConnection.connect(function (err) {
    if(err) {
        console.log(err);
        return;
    } else {
        console.log('Db is connected')
    }
})

console.log(mysqlConnection)

export {mysqlConnection}