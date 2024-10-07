const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const { AppError } = require("../helpers/errorHelpers");

// Fonction utilitaire pour nettoyer les erreurs de session
function clearSessionMessages(req) {
	req.session.validationErrors = null;
	req.session.oldInput = null;
	req.session.loginError = null;
	req.session.successMessage = null;
}

// Affiche la page de connexion
function getLoginPage(req, res) {
	res.render("pages/auth/login", {
		validationErrors: req.session.validationErrors,
		oldInput: req.session.oldInput,
		loginError: req.session.loginError,
		successMessage: req.session.successMessage,
	});
	clearSessionMessages(req); // Nettoyage de la session
}

// Gère la connexion
async function login(req, res, next) {
	try {
		const { email, password } = req.body;
		const user = await User.findByEmail(email);

		if (!user || !(await bcrypt.compare(password, user.password))) {
			throw new AppError("Email ou mot de passe incorrect", 401);
		}

		req.session.userId = user.id;
		req.session.firstName = user.first_name;

		// Vérifie si la requête accepte du JSON ou du HTML
		if (req.accepts("json")) {
			res.json({ success: true, message: "Connexion réussie" });
		} else {
			res.redirect("/");
		}
	} catch (error) {
		if (error instanceof AppError) {
			req.session.loginError = error.message;
			req.session.oldInput = { email: req.body.email };
			res.redirect("/auth/login");
		} else {
			next(new AppError("Erreur lors de la connexion", 500));
		}
	}
}

// Affiche la page d'inscription
function getRegisterPage(req, res) {
	res.render("pages/auth/register", {
		validationErrors: req.session.validationErrors,
		oldInput: req.session.oldInput,
	});
	clearSessionMessages(req);
}

// Gère l'inscription
async function register(req, res, next) {
	try {
		const { firstName, lastName, email, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);
		await User.create({ firstName, lastName, email, password: hashedPassword });

		req.session.successMessage =
			"Inscription réussie. Vous pouvez vous connecter.";
		res.redirect("/auth/login");
	} catch (error) {
		req.session.validationErrors =
			error.code === "23505"
				? [{ msg: "Cet email est déjà utilisé." }]
				: [{ msg: "Erreur lors de l'inscription." }];

		req.session.oldInput = req.body;
		res.redirect("/auth/register");
	}
}

// Gère la déconnexion
function logout(req, res, next) {
	const returnUrl = req.get("referer") || "/";
	req.session.destroy((err) => {
		if (err) return next(new AppError("Erreur lors de la déconnexion", 500));
		res.redirect(`${returnUrl}?message=Déconnexion réussie`);
	});
}

module.exports = {
	getLoginPage,
	login,
	getRegisterPage,
	register,
	logout,
};
