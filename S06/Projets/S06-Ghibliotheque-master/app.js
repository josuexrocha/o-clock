const express = require("express");
const app = express();
const path = require("node:path");
const fs = require("node:fs");

const films = JSON.parse(fs.readFileSync("./data/films.json", "utf-8"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

// Route pour la page d'accueil
app.get("/", (req, res) => {
	res.render("pages/index");
});

// Route pour la liste des films
app.get("/films", (req, res) => {
	res.render("pages/films", { films });
});

// Route pour afficher un film spécifique
app.get("/films/:id", (req, res) => {
	const film = films.find((f) => f.id === Number.parseInt(req.params.id, 10));
	if (film) {
		res.render("pages/film", { film });
	} else {
		res.status(404).render("pages/404");
	}
});

// Route pour la recherche
app.get("/search", (req, res) => {
	const { title, order } = req.query;
	let filteredFilms = films;

	if (title) {
		filteredFilms = filteredFilms.filter((film) =>
			film.title.toLowerCase().includes(title.toLowerCase()),
		);
	}

	if (order === "asc") {
		filteredFilms = filteredFilms.sort((a, b) =>
			a.title.localeCompare(b.title),
		);
	}

	res.render("pages/films", { films: filteredFilms });
});

// Route pour le login
app.post("/login", (req, res) => {
	const { username } = req.body;
	res.send(`<h1>Bonjour ${username}</h1>`);
});

// Route 404
app.use((req, res) => {
	res.status(404).render("pages/404");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
