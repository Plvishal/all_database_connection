import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import sql from 'mssql';
const app = express();

app.get('/api/ms', async (req, res) => {
  const result = await sql.query('select * from product');
  console.log(result.recordset);
  res.send(result.recordset);
});

export default app;
