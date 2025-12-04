import mysql from 'mysql2/promise';

export const dvb =await mysql.createPool({
    host: 'localhost',
    user:"",
    password:"",
    database:"utility_management_system"
})