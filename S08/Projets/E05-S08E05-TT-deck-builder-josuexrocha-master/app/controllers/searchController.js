// controllers/searchController.js
const dataMapper = require("../dataMapper.js");

const searchController = {
	searchPage: (req, res) => {
		res.render("search");
	},

	// pour la recherche par élément
	searchByElement: async (req, res) => {
		const { element } = req.query;
		try {
			const cards = await dataMapper.getCardsByElement(element);
			res.render("cardList", {
				cards,
				title: `Résultats de la recherche par élément : ${element === "null" ? "Aucun élément" : element}`,
			});
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.send(
					`Une erreur est survenue avec la base de données :\n${error.message}`,
				);
		}
	},

	// pour la recherche par niveau
	searchByLevel: async (req, res) => {
		const { level } = req.query;
		try {
			const cards = await dataMapper.getCardsByLevel(level);
			res.render("cardList", {
				cards,
				title: `Résultats de la recherche par niveau : ${level === "null" ? "Aucun niveau" : level}`,
			});
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.send(
					`Une erreur est survenue avec la base de données :\n${error.message}`,
				);
		}
	},

  // pour la recherche par valeur
  searchByValue: async (req, res) => {
    const { direction, value } = req.query;
    try {
      const cards = await dataMapper.getCardsByValue(direction, value);
      res.render("cardList", {
        cards,
        title: `Résultats de la recherche par valeur : ${value} dans la direction ${direction}`
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send(
          `Une erreur est survenue avec la base de données :\n${error.message}`,
        );
    }
  },

  // pour la recherche par nom
  searchByName: async (req, res) => {
    const { name } = req.query;
    try {
      const cards = await dataMapper.getCardsByName(name);
      res.render("cardList", {
        cards,
        title: `Résultats de la recherche par nom : ${name}`
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send(
          `Une erreur est survenue avec la base de données :\n${error.message}`,
        );
    }
  }
};

module.exports = searchController;
