const express = require("express");
const session = require("express-session"); // TODO #1 : Require express-session
const router = require("./app/router");

require("dotenv").config();

// Initialisation d'Express
const app = express();
const port = process.env.PORT;

// Cofiguration d'Express
app.set("view engine", "ejs");
app.set("views", `${__dirname}/app/views`);

// Middlewares
app.use(express.static("public"));

// TODO #2 : Configurer les sessions pour être utilisées dans l'application
app.use(
	session({
		secret: "votreSecretIci", // Remplace par une clé secrète (généralement dans .env)
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false }, // Mettre `secure: true` si en HTTPS
	}),
);

app.use(router);

// Démarrage du serveur
app.listen(port, () => {
	console.log(`Je suis lancé, visite http://localhost:${port}`);
});
