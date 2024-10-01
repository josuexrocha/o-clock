// Toujours commencer par importer les variables d'environnement !
require("dotenv").config();
const express = require("express");
const router = require("./app/router");
const app = express();
const path = require("node:path");
const session = require("express-session");

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static("integration"));

// configurer le moteur de rendu
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./app/views"));

// configurer la session
app.use(
	session({
		resave: true,
		saveUninitialized: true,
		secret: process.env.SESSION_SECRET,
		cookie: {
			secure: false,
			maxAge: 1000 * 60 * 60, // 1 heure
		},
	}),
);

// routage !
app.use(router);

// on lance le serveur
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});
