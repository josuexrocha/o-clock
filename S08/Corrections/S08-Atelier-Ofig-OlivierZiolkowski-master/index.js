// Toujours commencer par importer les variables d'environnement !
require("dotenv").config();
const session = require("express-session");

const express = require("express");

// on importe le router
const router = require("./app/router");

const app = express();

// Configuration d'EJS (c) Kevin
app.set("views", "./app/views");
app.set("view engine", "ejs");

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static("integration"));

// Paramètres de session
app.use(
  session({
    secret: process.env.SECRET_SESSION, // Permet de générer le cryptage basé sur une chaine de caractères
    resave: false, // Relance la sauvegarde du token automatiquement (si vrai) après une action
    saveUninitialized: true, // Sauvegarde la session sans nécessité d'authentification du client (pas de login / password)
    cookie: {
      secure: false, // Si false, le cookie peut être généré sur un site en HTTP (non sécurisé)
      maxAge: 1000 * 60 * 60, // Définit un temps d'expiration du cookie (ici fixé à une heure)
    },
  })
);

// routage !
app.use(router);

// on lance le serveur
app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
