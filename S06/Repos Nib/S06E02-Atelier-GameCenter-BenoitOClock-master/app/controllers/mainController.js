const games = require("../../games.json");
const users = require("../../users.json");

const mainController = {
  // homepage
  getHomepage: (request, response) => {
    // on renvoie le rendu du template index
    response.render("index");
  },

  // connection form
  getConnection: (request, response) => {
    // on renvoie le rendu du template signin
    response.render("signin");
  },

  // connection form handling
  postConnection: (request, response) => {
    // on récupère login et password dans le corps de la requête
    // cette opération est rendue possible grâce à la mise en place
    // d'un bodyParser (notre mw express.urlencoded)
    const { login, password } = request.body;
    // on recherche l'utilisateur
    const user = users.find(user => user.login === login);
    // si on ne trouve personne, ou si le mot de passe fourni n'est pas correct
    if (!user || user.password !== password) {
      // on renvoie le formulaire de connexion avec un message d'erreur
      return response.render("signin", {
        error: "Utilisateur inconnu ou mauvais mot de passe",
      });
    }
    // sinon on ajoute notre utilisateur à l'objet app.locals
    // accessible depuis l'objet requête et sa propriété app
    request.app.locals.user = user;
    // on redirige le client vers la page d'accueil
    response.redirect("/");
  },

  // games
  getGame: (request, response, next) => {
    // on cherche le jeu demandé
    const game = games.find(
      game => game.name.toLowerCase() === request.params.gameName
    );
    // si on ne trouve pas de jeu, on passe au mw suivant (pour finir dans le mw 404)
    if (!game) {
      return next();
    }
    // sinon on renvoie le rendu du template dédié au jeu demandé
    return response.render(game.name, { game });
  },

  // 404
  get404: (request, response, next) => {
    // on renvoie le rendu du template 404
    response.status(404).render("404");
  },
};

module.exports = mainController;
