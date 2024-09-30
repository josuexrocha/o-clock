// index.js

require("dotenv").config();
const express = require("express");
const router = require("./app/router");
const path = require("node:path");

// Créer une instanciation d'Express
const app = express();

// Middleware pour traiter les données du formulaire
app.use(express.urlencoded({ extended: true }));

// Configuration du moteur de templates
app.set("views", "./app/views");
app.set("view engine", "ejs");

// Appel des fichiers statiques
app.use("/static", express.static(path.join(__dirname, "static")));

// Appel du router
app.use(router);

// Lancement de l'application se basant sur un port d'écoute !
app.listen(process.env.PORT, () => {
	console.log(`Trombinoclock écoute sur le port ${process.env.PORT}`);
});
