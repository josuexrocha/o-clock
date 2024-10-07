// middlewares/validationMiddleware.js
const { body, param, validationResult } = require("express-validator");
const { AppError } = require("../helpers/errorHelpers");

// Messages d'erreur centralisés
const ERROR_MESSAGES = {
	invalidEmail: "Email invalide",
	invalidPassword:
		"Le mot de passe doit contenir au moins 6 caractères, un chiffre et une majuscule",
	invalidProductId: "ID du produit invalide",
	invalidQuantity: "La quantité doit être un entier positif",
};

// Validation de l'email
const emailValidation = () =>
	body("email")
		.isEmail()
		.withMessage(ERROR_MESSAGES.invalidEmail)
		.normalizeEmail();

// Validation du mot de passe
const passwordValidation = () =>
	body("password")
		.isLength({ min: 6 })
		.withMessage(ERROR_MESSAGES.invalidPassword)
		.matches(/\d/)
		.withMessage("Le mot de passe doit contenir au moins un chiffre")
		.matches(/[A-Z]/)
		.withMessage("Le mot de passe doit contenir au moins une lettre majuscule");

// Gestion des erreurs de validation
const handleValidationErrors = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		const errorMessages = errors.array().map((error) => error.msg);
		req.session.validationErrors = errors.array();
		return res.redirect("back");
	}
	next();
};

// Validation du panier
const validateCart = [
	body("productId")
		.isInt({ min: 1 })
		.withMessage(ERROR_MESSAGES.invalidProductId),
	body("quantity")
		.isInt({ min: 1 })
		.withMessage(ERROR_MESSAGES.invalidQuantity),
	handleValidationErrors,
];

// Validation de l'ID produit
const validateProductId = () =>
	param("productId")
		.isInt({ min: 1 })
		.withMessage(ERROR_MESSAGES.invalidProductId);

module.exports = {
	emailValidation,
	passwordValidation,
	handleValidationErrors,
	validateCart,
	validateProductId,
};
