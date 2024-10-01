const dataMapper = require("../dataMapper");

const bookmarksController = {
	// Afficher les favoris
	bookmarksPage: (req, res) => {
		const bookmarks = req.session.bookmarks || [];
		res.render("favoris", { bookmarks, activePage: "bookmarks" });
	},

	// Ajouter une figurine aux favoris
	addBookmark: async (req, res) => {
		const id = req.params.id;

		// Initialiser la liste si elle n'existe pas
		if (!req.session.bookmarks) {
			req.session.bookmarks = [];
		}

		// Vérifier si la figurine est déjà dans les favoris
		const isAlreadyBookmarked = req.session.bookmarks.some(
			(fig) => fig.id === id,
		);

		if (!isAlreadyBookmarked) {
			try {
				const figurine = await dataMapper.getOneFigurine(id);
				if (figurine) {
					req.session.bookmarks.push(figurine);
				}
			} catch (error) {
				console.error(error);
			}
		}

		res.redirect("/bookmarks");
	},

	// Supprimer une figurine des favoris
	deleteBookmark: (req, res) => {
		const id = Number.parseInt(req.params.id, 10);
		req.session.bookmarks = req.session.bookmarks.filter(
			(fig) => fig.id !== id,
		);
		res.redirect("/bookmarks");
	},
};

module.exports = bookmarksController;
