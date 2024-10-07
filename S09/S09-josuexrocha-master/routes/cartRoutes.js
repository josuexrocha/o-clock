// routes/cartRoutes.js
const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const authMiddleware = require("../middlewares/authMiddleware");

// Applique le middleware d'authentification à toutes les routes du panier
router.use(authMiddleware);

// Route pour afficher le panier
router.get("/", cartController.renderCartPage);

// Route pour ajouter un produit au panier
router.post("/add", cartController.addToCart);

// Route pour mettre à jour la quantité d'un produit dans le panier
router.put("/update", cartController.updateCartItem);

// Route pour supprimer un produit du panier
router.delete("/remove/:productId", cartController.removeFromCart);

// Route pour vider le panier
router.delete("/clear", cartController.clearCart);

module.exports = router;
