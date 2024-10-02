const dataMapper = require("../dataMapper.js");

const mainController = {
	// page d'accueil
	homePage: async (req, res) => {
		try {
			const cards = await dataMapper.getAllCards();
			res.render("cardList", {
				cards,
				title: "Liste des cartes",
			});
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.send(`An error occured with the database :\n${error.message}`);
		}
	},

	// page d'une carte
	cardDetail: async (req, res) => {
		const cardId = req.params.id;
		try {
			const card = await dataMapper.getCard(cardId);
			if (!card) {
				res.status(404).send(`La carte ${cardId} n'existe pas`);
				return;
			}
			res.render("cardDetail", {
				card,
				title: card.name,
			});
		} catch (error) {
			console.error(error);
			res.status(500);
			res
				.status(500)
				.send(
					`Une erreur est survenue avec la base de données :\n${error.message}`,
				);
		}
	},

	// ajouter une carte au deck
	addToDeck: async (req, res) => {
		const cardId = req.params.id;
		try {
			const card = await dataMapper.getCard(cardId);
			if (!card) {
				res.status(404).send(`La carte ${cardId} n'existe pas`);
				return;
			}
			// on vérifie si la session contient un deck
			if (!req.session.deck) {
				req.session.deck = [];
			}
			const deck = req.session.deck;
			// on vérifie si la carte est déjà dans le deck
			const alreadyInDeck = deck.find((c) => c === cardId);
			if (alreadyInDeck) {
				res.status(400).send(`La carte ${cardId} est déjà dans le deck`);
				return;
			}
			// on ajoute la carte au deck
			deck.push(card);
			res.redirect("/deck");
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.send(
					`Une erreur est survenue avec la base de données :\n${error.message}`,
				);
		}
	},

  // supprimer une carte du deck
  removeFromDeck: (req, res) => {
    const cardId = Number.parseInt(req.params.id, 10);
    if (!req.session.deck) {
      req.session.deck = [];
    }

    req.session.deck = req.session.deck.filter(card => card.id !== cardId);
    res.redirect('/deck');
  },

	// afficher le deck
	viewDeck: (req, res) => {
		const deck = req.session.deck || [];
		res.render("deck", {
			deck,
			title: "Votre Deck",
		});
	},
};

module.exports = mainController;
