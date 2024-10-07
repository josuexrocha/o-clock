// middlewares/customMiddleware.js

// Middleware de logging : affiche la date, l'heure, la méthode et l'URL des requêtes
const logger = (req, res, next) => {
	console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
	next();
};

// Middleware pour rediriger les requêtes HTTP vers HTTPS
const httpsRedirect = (req, res, next) => {
	if (req.secure) {
		next();
	} else {
		res.redirect(`https://${req.headers.host}${req.url}`);
	}
};

module.exports = { logger, httpsRedirect };
