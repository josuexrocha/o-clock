// on veut créer un serveur web on va prendre express
const express = require("express");
// on récupère les fonctions pour obtenir date et heure d'un fuseau particulier
const { getCurrentDate, getCurrentTime } = require("./my_modules/timezone");
const capitalCities = require("./capitals.json");

const app = express();
const port = 4000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./assets"));

app.get("/", (request, response) => {
  // on renvoie le fichier index.html
  response.render("index", { pageTitle: "Liste des capitales", capitalCities });
});

app.get("/city/:cityName", (request, response) => {
  // on récupère le nom de la ville
  const cityName = request.params.cityName;
  // on recherche dans le tableau capitalCities l'objet dont la propriété name (converti en minuscules)
  // est égale au nom de la ville reçu via la requête
  const foundCity = capitalCities.find(
    city => city.name.toLowerCase() === cityName
  );

  // si aucune ville n'est trouvé, foundCity sera undefined
  if (!foundCity) {
    // on renvoie une réponse avec un statusCode de 404
    return response.status(404).render("404", { pageTitle: "Erreur 404" });
  }

  // si une ville est trouvée on renvoie une pagfe html avec la date et l'heure sous le fuseau correspondant
  response.render("city", {
    pageTitle: `Le temps à ${foundCity.name}`,
    cityName: foundCity.name,
    cityDate: getCurrentDate(foundCity.tz),
    cityTime: getCurrentTime(foundCity.tz),
  });
});

app.listen(port, () => {
  console.log(`🚀 Server ready : http://localhost:${port}`);
});
