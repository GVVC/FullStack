const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

console.log(
  process.env.HOST,
  process.env.USER_NAME,
  process.env.PASSWORD,
  process.env.DATABASE,
  process.env.DB_PORT
);

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
});

connection.connect((err) => {
  if (err) {
    return console.log(err);
  }
  return console.log("db connected successfully...");
});
