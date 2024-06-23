import sql from 'mssql';
const User = {
  getProduct: async () => {
    const result = await sql.query('select * from product');
    return result.recordset;
  },
};

export default User;
