const express = require("express");
const port = 4000;

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

// ce mw va analyser le corps de la requête (si celui est est au format urlencodé)
// et ajouter à l'objet request, une propriété body qui aura pour valeur, un objet
// contenant les différentes données contenu dans le corps.
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.render("home", { user: request.query });
});

app.post("/form", (request, response) => {
  console.log(request.body);
  response.render("form", { user: request.body });
});

app.get("/form", (request, response) => {
  console.log(request.query);
  response.render("form", { user: request.query });
});

app.listen(port, () => {
  console.log(`🚀 http://localhost:${port}`);
});
