import mysql from 'mysql2/promise';

export const db =await mysql.createPool({
    host: 'localhost',
    user:"achini",
    password:"12345",
    database:"utility_management_system"
})
