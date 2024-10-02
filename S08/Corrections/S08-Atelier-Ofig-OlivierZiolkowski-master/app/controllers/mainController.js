const dataMapper = require("../dataMapper");

const mainController = {
  // Méthode permettant d'hydrater le partial 'aside'
  asideHydration: async (_req, res, next) => {
    try {
      res.locals.categories = await dataMapper.getCategories();
      console.log(res.locals);
      // On ne renvoie pas de page en particulier,
      // on va donc faire suivre notre middleware par un autre
      // via next()
      next();
    } catch (error) {
      res.status(500).send("Les catégories n'ont pas pu être récupérées");
    }
  },

  // méthode pour la page d'accueil
  homePage: async (request, response) => {
    try {
      const figurines = await dataMapper.getAllFigurines();
      console.log(figurines);
      response.render("accueil", { figurines });
    } catch (error) {
      response
        .status(500)
        .send("Erreur côté serveur, les données n'ont pas été remontées");
      client.end();
    }
  },

  // méthode pour la page article
  articlePage: async (request, response) => {
    // Je vais essayer de récupérer le résultat de mes promesses (résolution)
    try {
      // Je récupère le résultat d'une figurine (la figurine recherchée)
      const figurine = await dataMapper.getOneFigurine(
        Number(request.params.id)
      );
      // Je récupère le résultat des avis d'une figurine
      const reviews = await dataMapper.getFigurineReviews(
        Number(request.params.id)
      );
      // Ici, je renvoie la vue et les données associées
      response.render("article", { figurine, reviews });
    } catch (error) {
      response
        .status(500)
        .send("Erreur côté serveur pour récupérer la figurine");
    }
  },

  // Méthode permettant d'afficher les figurines par catégorie
  categoryPage: async (request, response) => {
    try {
      const figurines = await dataMapper.getFigurinesByCategory(
        request.params.categoryName
      );
      response.render("accueil", { figurines });
    } catch (error) {
      response
        .status(500)
        .send("Les figurines de cette catégorie n'ont pas été trouvées");
    }
  },
};

module.exports = mainController;
