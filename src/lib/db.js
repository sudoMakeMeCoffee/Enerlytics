import mysql from 'mysql2/promise';

export const db =await mysql.createPool({
    host: 'localhost',
    user:"",
    password:"",
    database:"utility_management_system"
})
