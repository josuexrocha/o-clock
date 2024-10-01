const express = require("express");

// on importe nos controllers
const mainController = require("./controllers/mainController");
const bookmarksController = require("./controllers/bookmarksController");

const router = express.Router();

// page d'accueil
router.get("/", mainController.homePage);

// page article
router.get('/article/:id', mainController.articlePage);

// page favoris
router.get("/bookmarks", bookmarksController.bookmarksPage);

// ajout d'un favori
router.get('/bookmarks/add/:id', bookmarksController.addBookmark);

// suppression d'un favori
router.get('/bookmarks/delete/:id', bookmarksController.deleteBookmark);

// page catégorie
router.get('/category/:name', mainController.categoryPage);

// page de recherche
router.get('/search', mainController.search);

// on exporte le router
module.exports = router;
