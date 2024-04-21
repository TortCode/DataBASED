const mysql = require("mysql2/promise");

const dbConfig = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};

const getConnection = async () => {
  const conn = await mysql.createConnection(dbConfig);
  return conn;
};

const query = async (sql) => {
  const conn = await getConnection();
  const [result, fields] = await conn.query(sql, params);
  await conn.end();
  return result;
};

const execute = async (sql, params) => {
  const conn = await getConnection();
  const [result, fields] = await conn.execute(sql, params);
  await conn.end();
  return result;
};

module.export = {
  getConnection,
  query,
  execute,
};