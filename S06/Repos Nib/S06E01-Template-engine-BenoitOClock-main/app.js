const express = require("express");

const app = express();
const port = 4000;

const students = ["Anna", "Claire", "Karim", "Redouane", "Dominique"];

// on défini le moteur de template à utiliser
app.set("view engine", "ejs");

// on dit à express dans quel dossier sont rangés nos vues
app.set("views", "./views");

// on dit à express que les assets statiques sont rangés dans le dossier public
app.use(express.static("./public"));

app.get("/", (request, response) => {
  response.render("home", { promoName: "Cthulhu", students });
});

app.listen(4000, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`);
});
