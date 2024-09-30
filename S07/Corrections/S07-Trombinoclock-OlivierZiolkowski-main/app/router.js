const express = require("express");
const mainController = require("./controllers/mainController");
const promoController = require("./controllers/promoController");
const studentController = require("./controllers/studentController");

// On crée une instanciation de la méthode Router()
// comprise dans la classe express
const router = express.Router();

// Routes principales
router.get("/", mainController.home);

// Déclaration des routes liées aux promos
router.get("/promotions", promoController.promosList);
router.get("/promotions/:id", promoController.promoInfos);

// Déclaration des routes liées aux étudiants
router.get("/promotions/:id/etudiants", studentController.getPromStudents);

module.exports = router;
