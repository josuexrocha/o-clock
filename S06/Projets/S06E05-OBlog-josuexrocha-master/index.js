const express = require("express");
const path = require("node:path");
const app = express();
const PORT = 3000;
const router = require('./routes');

// Configuration du moteur de templates EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, "static")));

// Utiliser le router
app.use('/', router);

// Démarrer le serveur
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
