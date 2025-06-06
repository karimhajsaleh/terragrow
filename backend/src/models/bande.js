const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Parcelle = require('./parcelle');

// Définition du modèle Bande avec Sequelize
const Bande = sequelize.define('Bande', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  parcelleId: {
    type: DataTypes.INTEGER,
    references: {
      model: Parcelle,
      key: 'id',
    },
  },
  numero: {
    type: DataTypes.INTEGER,
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

// Définition des relations entre Parcelle et Bande
Parcelle.hasMany(Bande, { foreignKey: 'parcelleId' });
Bande.belongsTo(Parcelle, { foreignKey: 'parcelleId' });

module.exports = Bande;