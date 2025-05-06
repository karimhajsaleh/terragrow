const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const parcelleRoutes = require('./routes/parcelles');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/parcelles', parcelleRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
});