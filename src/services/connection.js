const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  host: process.env.CONNECTION_URI,
  dialect: 'postgres'
});

const pool = async function connectToDB() {
  try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
  } catch (error) {
  console.error('Unable to connect to the database:', error);
  }
}
module.exports = {
  pool,
  sequelize
}