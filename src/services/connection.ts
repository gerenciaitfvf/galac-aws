// const { Sequelize } = require('sequelize');
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Option 1: Passing a connection URI
/*const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
});
*/

// Option 3: Passing parameters separately (other dialects)
const database = process.env.DB_NAME ?? "na";
const username = process.env.DB_USER ?? "na";
const password = process.env.DB_PASS ?? "na";

export const sequelize = new Sequelize(
    database, 
    username, 
    password, 
    {

      host: process.env.DB_HOST,
      logging: process.env.SEQ_LOG == 'true',
      dialect: "mysql" ,
      port: 3306,
      pool: {
        max:5,
        min:0,
        idle:10000
      }
    }   
);

