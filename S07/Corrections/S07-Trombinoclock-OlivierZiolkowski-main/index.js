// Récupération des dépendances
require("dotenv").config();
const express = require("express");
const router = require("./app/router");

// Créer une instanciation d'Express
const app = express();

// Définition du port d'écoute de l'application
// Mauvaise pratique, faille de sécurité
// Le port est déclaré dans un fichier pouvant
// être visible
// const PORT = 8000;

// Configuration du moteur de templates
app.set("views", "./app/views");
app.set("view engine", "ejs");

// Appel des fichiers statiques
app.use("/static", express.static("static"));

// Appel du router
app.use(router);

// Si il y a un problème lors de la résolution d'une route
app.use((req, res) => {
  res.status(404).render("404");
});

// Lancement de l'application se basant sur un port d'écoute !
app.listen(process.env.PORT, () => {
  console.log(`Trombinoclock écoute ${process.env.PORT}`);
});
