const dataMapper = require("../dataMapper");

const bookmarksController = {
  // méthode pour afficher les favoris
  bookmarksPage: (request, response) => {
    const bookmarks = request.session.bookmarks ?? [];
    response.render("favoris", { bookmarks });
  },

  // Méthode servant à ajouter des favoris dans une session
  addBookmark: async (request, response) => {
    // Si mon tableau de favoris n'existe pas...
    if (!request.session.bookmarks) {
      // Je le crée
      request.session.bookmarks = [];
    }

    // Si ma figurine n'est pas trouvée dans le tableau de favoris (recherche via son id)
    if (
      !request.session.bookmarks.find(
        (figurine) => figurine.id === Number(request.params.id)
      )
    ) {
      // Je souhaite ajouter une figurine en favori
      try {
        // Je vais chercher l'information concernant la figurine que je
        // souhaite ajouter dans mon tableau de favoris
        const figurine = await dataMapper.getOneFigurine(
          Number(request.params.id)
        );
        // J'ajoute la figurine recherchée en favori
        request.session.bookmarks.push(figurine);
      } catch (error) {
        response.status(500).send("La figurine n'a pas pu être trouvée");
      }
    }

    response.redirect("/bookmarks");
  },
};

module.exports = bookmarksController;
