// Je vais importer mon client de connexion à PG
const client = require("../client");
const dataMapper = require("../dataMapper");

const promoController = {
  // Méthode qui sert à afficher la vue correspondante
  // aux promos ainsi que les données des promos
  promosList: async (req, res) => {
    // Aller récupérer les données situées en base de données
    // via client.query() => C'est une promesse
    try {
      // J'appelle les données de manière asynchrone
      // via une méthode stockée dans le DataMapper
      const promos = await dataMapper.getAllPromos();

      // que l'on renvoie avec la vue (c'est le rôle d'un controller)
      res.render("promos", { promos });
    } catch (error) {
      // On renvoie un status code d'erreur et le message correspondant
      res.status(500).send(error);
      // On coupe aussi la connexion avec notre serveur de BDD
      client.end();
    }
  },

  // Méthode qui sert à afficher les informations
  // d'une seule promo (c) Tudor
  promoInfos: async (req, res, next) => {
    // J'essaie...
    try {
      const promo = await dataMapper.getOnePromo(req.params.id);

      if (!promo) {
        next();
      }

      // Je renvoie la vue et les données liées
      res.render("promo", { promo });
    } catch (error) {
      // Si erreur il y a ...
      res.status(500).send(error);

      // Big up Dom !
      client.end();
    }
  },
};

module.exports = promoController;
