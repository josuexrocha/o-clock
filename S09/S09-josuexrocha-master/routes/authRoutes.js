// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const {
	emailValidation,
	passwordValidation,
	handleValidationErrors,
} = require("../middlewares/validationMiddleware");

// Route pour afficher la page de connexion
router.get("/login", authController.getLoginPage);

// Route pour gérer la connexion
router.post(
	"/login",
	emailValidation(), // Validation de l'email
	passwordValidation(), // Validation du mot de passe
	handleValidationErrors, // Gestion des erreurs de validation
	authController.login,
);

// Route pour afficher la page d'inscription
router.get("/register", authController.getRegisterPage);

// Route pour gérer l'inscription
router.post(
	"/register",
	emailValidation(), // Validation de l'email
	passwordValidation(), // Validation du mot de passe
	handleValidationErrors, // Gestion des erreurs de validation
	authController.register,
);

// Route pour gérer la déconnexion
router.get("/logout", authController.logout);

module.exports = router;
