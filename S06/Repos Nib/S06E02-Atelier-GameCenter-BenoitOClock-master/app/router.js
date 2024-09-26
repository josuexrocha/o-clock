const express = require("express");
const authorize = require("./middlewares/authorize");
const {
  getHomepage,
  getConnection,
  postConnection,
  getGame,
  get404,
} = require("./controllers/mainController");

const router = express.Router();

router.get("/", getHomepage);
router.get("/signin", getConnection);
router.post("/signin", postConnection);
// il est possible d'associer plusieurs mw à une route donnée
// Comme d'habitude, il faudra appeler next pour passer du premier aux suivants
router.get("/game/:gameName", authorize, getGame);

router.use(get404);

module.exports = router;
