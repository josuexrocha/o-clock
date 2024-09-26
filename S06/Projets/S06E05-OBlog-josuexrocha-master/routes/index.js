const express = require("express");
const router = express.Router();
const articles = require("../data/articles.json");
const articleController = require("../controllers/articleController");

// Route pour la page d'accueil
router.get("/", (req, res) => {
	const articles = articleController.getAllArticles();
	res.render("index", { articles: articles, title: "O'Blog - Accueil" });
});

// Route pour la page d'un article
router.get("/article/:id", (req, res) => {
	const articleId = Number.parseInt(req.params.id, 10);
	const article = articleController.getArticleById(articleId);

	if (article) {
		res.render("article", {
			article: article,
			title: `O'Blog - ${article.title}`,
		});
	} else {
		res.status(404).send("Article non trouvé");
	}
});

// Route pour la page d'une catégorie
router.get("/categorie/:category", (req, res) => {
	const categoryParam = req.params.category.toLowerCase();
	const articlesByCategory = articles.filter(
		(article) => article.category.toLowerCase() === categoryParam,
	);

	if (articlesByCategory.length > 0) {
		res.render("category", {
			articles: articlesByCategory,
			category: categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1),
			title: `O'Blog - Catégorie ${categoryParam}`,
		});
	} else {
		res.status(404).send("Aucun article trouvé pour cette catégorie");
	}
});

module.exports = router;
