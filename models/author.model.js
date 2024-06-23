import mysql from '../mysqlConfig/mysql.js';
const Author = {
  getAuthor: async () => {
    const [rows] = await mysql.query('select * from authors');
    return rows;
  },
};

export default Author;
