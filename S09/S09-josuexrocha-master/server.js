// server.js

// Importation des modules
const express = require("express");
const https = require("node:https");
const fs = require("node:fs");
const path = require("node:path");
const dotenv = require("dotenv");
const configureApp = require("./config/app");
const { logger, httpsRedirect } = require("./middlewares/customMiddleware");
const configureRoutes = require("./routes");
const { notFound, errorHandler } = require("./helpers/errorHelpers");
const setupSessionTable = require("./config/sessionSetup");

// Configuration des variables d'environnement
dotenv.config();

// Création de l'application Express
const app = express();

// Configuration de l'application
app.use(logger); // Logger personnalisé
app.use(httpsRedirect); // Redirection HTTP -> HTTPS en production

// Configuration des routes
configureApp(app);
configureRoutes(app);

// Initialisation de la table de session
setupSessionTable().catch(console.error);

// Middleware de gestion des erreurs (404 et erreurs globales)
app.use(notFound);
app.use(errorHandler);

// Démarrage du serveur
const PORT = process.env.PORT || 3000;

// Démarrage du serveur en production ou en développement
if (process.env.NODE_ENV === "production") {
	app.listen(PORT, () => {
		console.log(`Serveur de production démarré sur le port ${PORT}`);
	});
} else {
	const httpsOptions = {
		key: fs.existsSync(path.join(__dirname, "localhost-key.pem"))
			? fs.readFileSync(path.join(__dirname, "localhost-key.pem"))
			: null,
		cert: fs.existsSync(path.join(__dirname, "localhost.pem"))
			? fs.readFileSync(path.join(__dirname, "localhost.pem"))
			: null,
	};

	if (httpsOptions.key && httpsOptions.cert) {
		https.createServer(httpsOptions, app).listen(PORT, () => {
			console.log(
				`Serveur de développement HTTPS démarré sur https://localhost:${PORT}`,
			);
		});
	} else {
		console.warn("Certificats HTTPS non trouvés, démarrage en HTTP...");
		app.listen(PORT, () => {
			console.log(
				`Serveur de développement démarré sur http://localhost:${PORT}`,
			);
		});
	}
}

// Gestion des erreurs non capturées
process.on("unhandledRejection", (reason, promise) => {
	console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

process.on("uncaughtException", (error) => {
	console.error("Uncaught Exception:", error);
	process.exit(1);
});
