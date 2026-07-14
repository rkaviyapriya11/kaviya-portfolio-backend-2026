import { Sequelize } from 'sequelize';
import "./config/env";

// const sequelize = new Sequelize({
//   dialect: 'mysql',
//   host: '127.0.0.1',
//   port: 3306,
//   username: 'kaviya_db_user',
//   password: '123Kaviyadb!@#',
//   database: "kaviya_portfolio", 
//   logging: false,
//   pool: {
//     max: 100, // Increase this number
//     min: 0,
//     acquire: 120000, // Increase the timeout value (milliseconds)
//     idle: 10000
//   }
// });



// const sequelize = new Sequelize({
//   dialect: 'mysql',
//   host: process.env.host,
//   port: Number(process.env.port),
//   username: process.env.user,
//   password: process.env.password,
//   database: process.env.database,
//   logging: false,
//   pool: {
//     max: 100,
//     min: 0,
//     acquire: 120000,
//     idle: 10000,
//   },
// });
// console.log(process.cwd());
// console.log(process.env.host);

// console.log("host =", process.env.host);
// console.log("user =", process.env.user);
// console.log("password =", process.env.password);
// console.log("database =", process.env.database);
console.log("MYSQL_PUBLIC_URL =", process.env.MYSQL_PUBLIC_URL);


const sequelize = new Sequelize(process.env.MYSQL_PUBLIC_URL as string, {
  dialect: "mysql",
  logging: false,
});


sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Connection error:', err));

export default sequelize;