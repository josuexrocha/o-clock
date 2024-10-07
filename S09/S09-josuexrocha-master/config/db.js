// config/db.js

const { Pool } = require("pg");
require("dotenv").config();

// Configuration de la connexion à PostgreSQL
const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
});

// Gestion des erreurs lors de la connexion à la base de données
pool.on("error", (err) => {
  console.error("Erreur inattendue sur le client PostgreSQL", err);
  process.exit(-1);
});

module.exports = {
  // Fonction pour exécuter des requêtes SQL
  query: (text, params) => pool.query(text, params),

  // Fonction pour obtenir un client et exécuter des transactions manuelles
  getClient: () => pool.connect(),
};
