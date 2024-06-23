import mssql from 'mssql';

const configMS = {
  user: process.env.MS_USER_ID,
  password: process.env.MS_PASSWORD,
  server: process.env.MS_SERVER_NAME,
  database: process.env.MS_DB_NAME,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};
const connectMS = async () => {
  try {
    const s = await mssql.connect(configMS);
    console.log('MS SQL connected successfuly done !!');
  } catch (error) {
    console.log(error.message);
  }
};

export { connectMS };
