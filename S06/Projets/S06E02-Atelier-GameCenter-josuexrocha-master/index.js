const express = require("express");
const app = express();
const port = 4000;

const games = require('./games.json');

// middleware de journalisation
app.use((req, res, next) => {
    const currentDate = new Date().toISOString();
    const clientIp = req.ip;
    const accessedPath = req.originalUrl;
    console.log(`[${currentDate} ${clientIp}] ${accessedPath}`);
    next();
});

app.set('view engine', 'ejs');  // equivalent à const ejs = require("ejs");
app.set("views", "./views");   //Pourquoi pas ../../views ???

//définit un chemin à emprunter pour tous les assets utilisés par des fichiers .ejs (css, images,etc..)
// sans avoir à réécrire le chemin à chaque fois.
app.use(express.static("./public")); 

//page d'accueil
app.get("/", (request, response) => {
    response.render("index", { games }); //lance index.ejs
})

//route parametre pour nos jeux 
app.get("/game/:nomDuJeu", (request, response) => {
    const game = games.find((game) => game.name.toLowerCase() === request.params.nomDuJeu.toLowerCase())
    if (game){
        response.render(game.name, { games, game }); //lance le jeu correspondant
    } else {
        response.status(404).send(`Le jeu n'existe pas :/`);
    }
})

// middleware pour gérer les erreurs 404
app.use((req, res, next) => {
    res.status(404).render('404');
});

//port d'écoute
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
