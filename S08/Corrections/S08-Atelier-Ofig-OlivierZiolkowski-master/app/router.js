const express = require("express");

// on importe nos controllers
const mainController = require("./controllers/mainController");
const bookmarksController = require("./controllers/bookmarksController");

const router = express.Router();

// page d'accueil
router.get("/", mainController.asideHydration, mainController.homePage);

// page article
router.get(
  "/article/:id",
  mainController.asideHydration,
  mainController.articlePage
);

// Page catégorie
router.get(
  "/categorie/:categoryName",
  mainController.asideHydration,
  mainController.categoryPage
);

// page favoris
router.get("/bookmarks", bookmarksController.bookmarksPage);
router.get("/bookmarks/:id", bookmarksController.addBookmark);

// on exporte le router
module.exports = router;
