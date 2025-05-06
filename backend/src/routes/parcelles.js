const express = require('express');
const router = express.Router();
const Parcelle = require('../models/parcelle');
const Bande = require('../models/bande');
const sequelize = require('../config/database');

// Constante pour la largeur standard d'une bande
const STANDARD_BAND_WIDTH = 1.2;

// Route POST pour créer une nouvelle parcelle
router.post('/', async (req, res) => {
  try {
    const { nom, longueur, largeur } = req.body;
    if (!nom || !longueur || !largeur) {
      return res.status(400).json({ error: 'Champs requis manquants' });
    }
    const parcelle = await Parcelle.create({ nom, longueur, largeur });

    // Calcule le nombre de bandes en fonction de la largeur de la parcelle
    const numBandes = Math.floor(largeur / STANDARD_BAND_WIDTH);
    const bandes = [];
    // Crée des bandes pour la parcelle
    for (let i = 1; i <= numBandes; i++) {
      bandes.push({
        parcelleId: parcelle.id,
        numero: i,
        longueur,
        largeur: STANDARD_BAND_WIDTH,
      });
    }
    // Insère toutes les bandes dans la base de données
    await Bande.bulkCreate(bandes);

    res.status(201).json(parcelle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route GET pour récupérer toutes les parcelles avec le nombre de bandes
router.get('/', async (req, res) => {
  try {
    const parcelles = await Parcelle.findAll({
      include: [{ model: Bande, attributes: [] }],
      attributes: {
        include: [
          [sequelize.fn('COUNT', sequelize.col('Bandes.id')), 'bandeCount'],
        ],
      },
      group: ['Parcelle.id'],
    });
    res.json(parcelles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route GET pour récupérer les bandes d'une parcelle spécifique
router.get('/:id/bandes', async (req, res) => {
  try {
    const bandes = await Bande.findAll({
      where: { parcelleId: req.params.id },
      include: [Parcelle],
    });
    res.json(bandes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;