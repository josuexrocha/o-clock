const express = require("express");
const router = express.Router();

const mainController = require("./controllers/mainController");
const searchController = require("./controllers/searchController");

router.get("/", mainController.homePage);
router.get("/search", searchController.searchPage);

// routes pour les détails d'une cartes
router.get("/card/:id", mainController.cardDetail);

// routes pour la recherche
router.get("/search/element", searchController.searchByElement);
router.get("/search/level", searchController.searchByLevel);
router.get("/search/values", searchController.searchByValue);
router.get("/search/name", searchController.searchByName);

// routes pour le deck
router.get("/deck/add/:id", mainController.addToDeck);
router.get("/deck", mainController.viewDeck);
router.get("/deck/remove/:id", mainController.removeFromDeck);

module.exports = router;
