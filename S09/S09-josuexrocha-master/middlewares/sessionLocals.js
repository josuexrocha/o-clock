// middlewares/sessionLocals.js

// Middleware pour injecter les informations de session dans les variables locales
function sessionLocals(req, res, next) {
	res.locals.isAuthenticated = !!req.session.userId;
	res.locals.firstName = req.session.firstName || null;
	res.locals.userId = req.session.userId || null;
	res.locals.email = req.session.email || null;
	next();
}

module.exports = sessionLocals;
