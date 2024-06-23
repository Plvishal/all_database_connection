import dotenv from 'dotenv';
dotenv.config();
import sql from 'mysql2';
console.log(process.env.MYSQL_HOSTNAME);
const mysql = sql.createConnection({
  host: process.env.MYSQL_HOSTNAME,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

mysql.connect((error) => {
  if (error) {
    console.log(error.message);
  }
  console.log('Connection done with MYSQL !!!');
});

export default mysql.promise();
