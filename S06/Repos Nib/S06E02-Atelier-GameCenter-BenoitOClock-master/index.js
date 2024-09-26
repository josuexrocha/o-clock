const express = require("express");
const router = require("./app/router");
const logger = require("./app/middlewares/logger");
const games = require("./games.json");

const port = 4000;

const app = express();
// on ajoute le tableau des jeux à app.locals afin de le rendre disponible
// à l'intérieur de tous les templates
app.locals.games = games;

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(logger);
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
  console.log(`🚀 server ready: http://localhost:${port}`);
});
