const dataMapper = require("../dataMapper");

const mainController = {
	// méthode pour la page d'accueil
	homePage: async (req, res) => {
		try {
			const categories = await dataMapper.getCategoriesWithCount();
			const figurines = await dataMapper.getAllFigurines();
			res.render("accueil", {
				categories,
				figurines,
				activePage: "home",
			});
		} catch (error) {
			console.error(error);
			res.status(500).send("Erreur serveur");
		}
	},

	// méthode pour la page article
	articlePage: async (req, res) => {
		try {
			const id = req.params.id;

			// Récupérer la figurine
			const figurine = await dataMapper.getFigurineWithAverageNote(id);

			if (!figurine) {
				res.status(404).send("Figurine non trouvée");
			} else {
				const categories = await dataMapper.getCategoriesWithCount();
				const reviews = await dataMapper.getReviewsByFigurineId(id);

				// Calculer la note moyenne
				const averageNote =
					reviews.reduce((sum, review) => sum + review.note, 0) /
						reviews.length || 0;

				res.render("article", {
					figurine,
					categories,
					reviews,
					averageNote,
					activePage: "article",
				});
			}
		} catch (error) {
			console.error(error);
			res.status(500).send("Erreur serveur");
		}
	},

	// méthode pour la page catégorie
	categoryPage: async (req, res) => {
		try {
			const categoryName = req.params.name;
			const figurines = await dataMapper.getFigurinesByCategory(categoryName);
			const categories = await dataMapper.getCategoriesWithCount();
			res.render("accueil", {
				figurines,
				categories,
				activePage: "category",
			});
		} catch (error) {
			console.error(error);
			res.status(500).send("Erreur serveur");
		}
	},

	// méthode pour la page de recherche
	search: async (req, res) => {
		try {
			const query = req.query.q;
			const figurines = await dataMapper.searchFigurines(query);
			const categories = await dataMapper.getCategoriesWithCount();
			res.render("accueil", {
				figurines,
				categories,
				activePage: "home",
			});
		} catch (error) {
			console.error(error);
			res.status(500).send("Erreur serveur");
		}
	},
};

module.exports = mainController;
