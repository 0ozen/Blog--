import mysql from 'mysql2';
import dot from "dotenv";

dot.config() //archivo .env 

export const con = mysql.createPool({
    connectionLimit:6,
    host: process.env.DB_HOST, //localhost
    user: process.env.DB_USER, //root
    password: process.env.DB_PASSWORD, //password
    database: process.env.DB, //database
    
  });

  con.getConnection((err,connection)=> {
    if(err){throw err;}
    console.log('Database connected successfully');
    connection.release();
  });