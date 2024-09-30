const mainController = {
  /**
   * Méthode qui définit le traitement à réaliser
   * pour la page d'accueil
   */
  home: (req, res) => {
    // On rend la page nommée "index" dans le dossier "views"
    res.render("index");
  },
};

module.exports = mainController;
