const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Définition du modèle Parcelle avec Sequelize
const Parcelle = sequelize.define('Parcelle', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  longueur: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  largeur: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Parcelle;