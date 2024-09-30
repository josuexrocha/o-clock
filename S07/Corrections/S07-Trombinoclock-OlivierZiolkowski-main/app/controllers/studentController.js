// Je vais importer mon client de connexion à PG
const client = require("../client");
const dataMapper = require("../dataMapper");

const studentController = {
  // Méthode qui récupère les étudiant d'une promo
  getPromStudents: async (req, res, next) => {
    try {
      const promoStudents = await dataMapper.getPromStudents(req.params.id);

      if (promoStudents.length === 0) {
        // Si on ne trouve pas d'étudiant dans notre promo
        // On passe ce middleware pour se rendre à celui des ressources non trouées (404)
        next();
      }

      const promoName = (await dataMapper.getOnePromo(req.params.id)).name;
      console.log(promoName);

      // On passe directement les valeurs à notre objet
      res.render("promoStudents", {
        promoStudents,
        promoName,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send("Erreur lors de la récupération des étudiants");
      client.end();
    }
  },
};

module.exports = studentController;
