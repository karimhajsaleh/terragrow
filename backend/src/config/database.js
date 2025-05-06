const { Sequelize } = require('sequelize');
require('dotenv').config();

// Création d'une instance Sequelize pour connecter à PostgreSQL
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: process.env.DB_PORT,
});

module.exports = sequelize;