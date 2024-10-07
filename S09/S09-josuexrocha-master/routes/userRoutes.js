// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

// Route pour récupérer le profil de l'utilisateur (nécessite une authentification)
router.get("/profile", authMiddleware, userController.getProfile);

module.exports = router;
