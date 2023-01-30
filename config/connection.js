require('dotenv').config();

const Sequelize = require('sequelize');
const mysql = require('mysql2');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});

module.exports = sequelize;
