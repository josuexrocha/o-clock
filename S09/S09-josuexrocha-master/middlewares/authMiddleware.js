// middlewares/authMiddleware.js

function authMiddleware(req, res, next) {
	// Vérifier si l'utilisateur est authentifié
	if (req.session.userId) {
		return next(); // Continuer vers la prochaine middleware/route
	}

	// Vérifier si la requête est AJAX ou attend une réponse JSON
	const isAjaxRequest = req.xhr || req.headers.accept.includes("json");

	if (isAjaxRequest) {
		return res
			.status(401)
			.json({
				error: "Vous devez être connecté pour accéder à cette ressource",
			});
	}

	// Rediriger vers la page de connexion pour les requêtes classiques
	res.redirect("/auth/login");
}

module.exports = authMiddleware;
