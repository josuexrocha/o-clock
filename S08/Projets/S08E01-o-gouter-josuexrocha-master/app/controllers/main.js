const mainController = {
	/**
	 * Génère une page HTML pour la page d'accueil.
	 * Cette page affiche une chaine de caractère différente en fonction de l'heure.
	 *
	 * @param {Request} request
	 * @param {Response} response
	 */
	home: (request, response) => {
		// TODO #3 : Récupérer le thème depuis la session, sinon définir 'light'
		const theme = request.session.theme || "light";

		const currentDate = new Date();
		let isItGouterTime;

		switch (currentDate.getHours()) {
			case 15:
				isItGouterTime = "Presque.... mais pas encore !";
				break;
			case 16:
				isItGouterTime = "OUI !";
				break;
			case 17:
				isItGouterTime = "OU.. Eh, non, trop tard ¯(ツ)/¯";
				break;
			default:
				isItGouterTime = "NOPE.";
				break;
		}

		// TODO #3 bis : Transmettre la variable `theme` à la vue
		response.render("index", {
			isItGouterTime,
			theme, // On transmet la variable `theme` à la vue
		});
	},

	// /switch/:theme
	switchTheme: (request, response) => {
		const theme = request.params.theme; // TODO #2 : Récupérer le thème depuis l'URL
		request.session.theme = theme; // TODO #2 bis : Enregistrer le thème dans la session
		response.redirect("/"); // TODO #2 ter : Rediriger l'utilisateur vers la page d'accueil
	},
};

module.exports = mainController;
