// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const {
	validateProductId,
	handleValidationErrors,
} = require("../middlewares/validationMiddleware");

// Route pour récupérer tous les produits avec pagination
router.get("/", productController.getAllProducts);

// Route pour récupérer un produit par son ID avec validation
router.get(
	"/:productId",
	validateProductId(), // Valide l'ID du produit
	handleValidationErrors, // Gère les erreurs de validation
	productController.getProductById,
);

module.exports = router;
