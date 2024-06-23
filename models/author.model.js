import mysql from '../mysqlConfig/mysql.js';
const Author = {
  getAuthor: async () => {
    const [rows] = await mysql.query('select * from authors');
    return rows;
  },

  createAuthor: async (author_id, author_name, bio) => {
    const [rows] = await mysql.query('insert into authors values (?,?,?)', [
      author_id,
      author_name,
      bio,
    ]);
    return rows;
  },
};

export default Author;
