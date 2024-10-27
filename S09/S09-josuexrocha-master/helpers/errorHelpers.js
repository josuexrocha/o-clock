// helpers/errorHelpers.js

class AppError extends Error {
	constructor(message, statusCode) {
		super(message);
		this.statusCode = statusCode;
		this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
		this.isOperational = true;

		Error.captureStackTrace(this, this.constructor);
	}
}

// Middleware pour gérer les routes non trouvées (404)
const notFound = (req, res, next) => {
	const error = new AppError(`Page non trouvée - ${req.originalUrl}`, 404);
	next(error);
};

// Middleware général de gestion des erreurs
const errorHandler = (err, req, res, next) => {
	console.error("Error details:", err);
	console.error(err.stack);

	err.statusCode = err.statusCode || 500;
	err.status = err.status || "error";

	// Gestion des requêtes AJAX/JSON
	if (req.xhr || req.headers.accept.indexOf("json") > -1) {
		return res.status(err.statusCode).json({
			status: err.status,
			message: err.message,
		});
	}

	// Gestion des erreurs 404
	if (err.statusCode === 404) {
		return res.status(404).render("pages/not-found", {
			message: "Désolé, la page que vous recherchez n'existe pas.",
			req,
		});
	}

	// Gestion des autres types d'erreurs
	res.status(err.statusCode).render("pages/error", {
		message:
			process.env.NODE_ENV === "production"
				? "Une erreur est survenue"
				: err.message,
		req,
	});
};

module.exports = {
	AppError,
	notFound,
	errorHandler,
};
