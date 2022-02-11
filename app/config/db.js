const mssql = require('mssql');
require('dotenv').config();

const db = {}

const config = {
    server: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME,
    options: {
      trustedConnection: true,
      trustServerCertificate: true
    },
  };

db.poolPromise = new mssql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("Connected to MSSQL");
    return pool;
  })
  .catch((err) => console.log("Database Connection Failed! Bad Config: ", err));

 

db.mssql = mssql;

module.exports = db